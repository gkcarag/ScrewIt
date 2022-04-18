import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from "react-native-paper";
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Axios from "axios";

const signup = (props) => {

    const submitPress = data => {
        console.log(data);
    }

    const { control, handleSubmit, error } = useForm();

    //request to db
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
    
    return(
        <View style={styles.loginScreen}>
            <FormInput
                name="email"
                placeholder="email"
                control={control}
            />
            <FormInput 
                name="username"
                placeholder="username"
                control={control}
            />
            <FormInput
                name="password"
                placeholder="password"
                control={control}
                secureTextEntry
            />

            <FormButton 
                onPress={handleSubmit(register)}
                //onPress={handleSubmit(submitPress)}
                text="Submit"

            />
            <Button onPress={() => props.navigation.pop(1)}>
                Back
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


