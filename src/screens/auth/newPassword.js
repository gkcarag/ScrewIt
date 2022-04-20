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

const newPassword = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm({
        defaultValues: {username: route?.params?.username}
    });
    const username = watch('username');
    const onSubmit = async data => {
        try{
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
            Alert.alert("Success!", "Please sign in again");
            navigation.navigate("signin");
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    };

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
                rules={{
                    required: 'Enter confirmation code',
                }}
            />
            <FormInput
                name="password"
                placeholder="Enter new password"
                control={control}
                secureTextEntry
                rules={{
                    required: "Password is required",
                    minLength: {value:4, message: 'Password must be at least 4 characters'}
                }}
                />
            <FormButton 
                onPress={handleSubmit(onSubmit)}
                text="Submit"
            />
            <Button onPress={() => props.navigation.navigate("loginSelection")}>
                Back to Sign In
            </Button>
           
        </View>
    )
}

export default newPassword;


