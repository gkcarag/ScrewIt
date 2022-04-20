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

const email_reg =  	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const signup = (props) => {

    const { control, handleSubmit, watch} = useForm();
    const pword = watch('password');
    const navigation = useNavigation();
    //request to db
    /*
    const [usernameInput, usernameSet] = useState("");
    const [passwordInput, passwordSet] = useState("");
    const [emailInput, emailSet] = useState("");
    const register = data => {
        usernameSet(data.username);
        passwordSet(data.password);
        emailSet(data.email);
        try{
            Axios.post("/register", {
                username: usernameInput,
                password: passwordInput,
                email: emailInput,
            })
            console.log(usernameInput);
            console.log(passwordInput);
            console.log(emailInput);
            console.log("user added");
        }
        catch (err) {
            console.log("error somewhere");
        }
    };
    */
    const submitPress = async data => {
        const {email, username, password} = data;

        try {
            //console.log(data);
            await Auth.signUp({
                username,
                password,
                attributes: {email}
            });
            //console.log(response);
            navigation.navigate("confirmEmail",{username});
        } catch (e) {
            Alert.alert("Error", e.message);
        }
    }
    return(
        <View style={styles.loginScreen}>
            <FormInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {value: email_reg, message: 'Invalid email'},
                }}
            />
            <FormInput 
                name="username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required', 
                    minLength: {value:4, message: 'Username must be at least 4 characters'},
                    maxLength: {value:12, message: 'Username cannot exceed 12 characters'},
                }}
            />
            <FormInput
                name="password"
                placeholder="Password"
                control={control}
                rules={{required: 'Password is required', minLength: {value:4, message: 'Password must be at least 4 characters'}}}
                secureTextEntry
            />
            
            <FormInput
                name="Confirm-Password"
                control={control}
                placeholder="Confirm Password"
                secureTextEntry
                rules={{
                    required: 'Please confirm password',
                    validate: value => value === pword || 'Passwords do not match',
                }}
            />
            
            <FormButton 
                //onPress={handleSubmit(register)}
                onPress={handleSubmit(submitPress)}
                text="Submit"

            />
            <Button onPress={() => props.navigation.navigate("signin")}>
                Back to Sign In
            </Button>
           
        </View>
    )
    /*
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };
  */
}

export default signup;


