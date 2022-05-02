import React, { Fragment, useState } from 'react';
import { View, Alert, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native';
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
        <ImageBackground style={styles.loginScreen} source={require('../pictures/intro.png')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View 
            style={{
                flex: 1,
                padding: 32
            }}
            justifyContent='center'
            width='100%'
            textAlign='center'
            alignItems='center'
        >
            <Text
                style={{
                    fontSize: 32,
                    fontWeight: 'bold'
                }}    
            >
                Confirm username and confirmation code
            </Text>
            <View style={{height: 64}}/>
            <FormInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required',
                }}
            />
            <View style={{height: 8}}/>
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
            <View style={{height: 8}}/>
            <FormButton 
                onPress={resendCode}
                text="Resend confirmation code"
                bgColor={"green"}
            />
            <View style={{height: 8}}/>
            <FormButton 
                onPress={() => props.navigation.navigate("loginSelection")}
                bgColor={"red"}
            >
                <Text style={{color: 'white'}}>
                Back to Sign In
                </Text>
            </FormButton>
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

export default confirmEmail;


