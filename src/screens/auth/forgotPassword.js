import { View, Alert, ImageBackground, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles";
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/core';

const forgotPassword = (props) => {
    const { control, handleSubmit, error } = useForm();
    const navigation = useNavigation();
    const submitPress = async data => {
        try{
            await Auth.forgotPassword(data.username);
            navigation.navigate('newPassword');
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    };

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
                Enter username to send recovery email
            </Text>
            <View style={{height: 64}}/>
            <FormInput
                name="username"
                placeholder="Username"
                control={control}
            />
            <View style={{height: 64}}/>
            <FormButton 
                onPress={handleSubmit(submitPress)}
                text="Submit"
            />
            <View style={{height: 8}}/>
            <FormButton onPress={() => props.navigation.navigate("loginSelection")}
                text="Back to Sign In"
                bgColor={"red"}
            >
            </FormButton>
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    )
};

export default forgotPassword;