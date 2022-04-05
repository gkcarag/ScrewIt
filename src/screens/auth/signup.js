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
            console.log("user added");
        }
        catch (err) {
            console.log("error somewhere");
        }
    };
    /*
    const onSubmitForm = async data => {
        console.log(data);
        //data.preventDefault();
        try {
            const body = { description };
            const response = await fetch("postgres://rqjesgropnqndl:e75f08c832a31da59d0615deaa6a01918a44326f07d2c9bb5e077885770f596b@ec2-54-160-109-68.compute-1.amazonaws.com:5432/d330ceomi8n88b", {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err){
            console.error(err.message);
        }
    }*/
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
               // onPress={handleSubmit(register)}
                onPress={handleSubmit(submitPress)}
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


