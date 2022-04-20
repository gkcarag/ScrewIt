import { View, Alert } from "react-native";
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
        <View style={styles.loginScreen}>
            <Text>
                Enter your username to send recovery email
            </Text>
            <FormInput
                name="username"
                placeholder="Username"
                control={control}
            />
            <FormButton 
                onPress={handleSubmit(submitPress)}
                text="Submit"
            />
            <Button onPress={() => props.navigation.navigate("loginSelection")}>
                Back to Sign In
            </Button>
        </View>
    )
};

export default forgotPassword;