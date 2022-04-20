import React, { Fragment, useState } from 'react';
import { View, Alert } from 'react-native';
import { Text, Button } from "react-native-paper";
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Axios from "axios";
import { Auth } from 'aws-amplify';
import { ConsoleLogger } from '@aws-amplify/core';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';

const confirmEmail = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm({
        defaultValues: {username: route?.params?.username}
    });
    const username = watch('username');
    const onSubmit = async data => {
        try{
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate("signin");
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    };

    const resendCode = async () => {
        try{
            await Auth.resendSignUp(username);
            Alert.alert('New confirmation code sent', 'Please check your email');
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    }

    return(
        <View style={styles.loginScreen}>
            <FormInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required',
                }}
            />
            <FormInput
                name="code"
                placeholder="Enter confirmation code"
                control={control}
              //  rules={{
                //    required: 'Enter confirmation code',
               // }}
            />
            <FormButton 
                onPress={handleSubmit(onSubmit)}
                text="Submit"
            />
            <FormButton 
                onPress={resendCode}
                text="Resend confirmation code"
            />
            <Button onPress={() => props.navigation.navigate("loginSelection")}>
                Back to Sign In
            </Button>
           
        </View>
    )
}

export default confirmEmail;


