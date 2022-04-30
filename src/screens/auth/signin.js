import React, { Fragment, useState } from 'react';
import { Alert, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Button } from "react-native-paper";
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Axios from "axios";
import {Auth} from 'aws-amplify';

const signin = (props) => {
    const[loading, setLoading] = useState(false);
    const submitPress = async (data) => {
        if(loading) {
            return;
        }
        setLoading(true);
        try{
            const response = await Auth.signIn(data.Username,data.Password);
            console.log(response);
        } catch(e) {
            Alert.alert('Login failed',e.message);
        }
        setLoading(false);
    };

    const { control, handleSubmit, watch} = useForm();
    const pword = watch('Password');
    //request to db
    return(
        <ImageBackground style={styles.loginScreen} source={require('../pictures/intro.png')}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View 
            style={{
                flex: 1,
                padding: 32,
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
                Sign In
            </Text>
            <View style={{height: 64}}/>
            <FormInput 
                name="Username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required', 
                }}
            />
            <View style={{height: 8}}/>
            <FormInput
                name="Password"
                placeholder="Password"
                control={control}
                rules={{
                    required: 'Password is required'
                }}
                secureTextEntry
            />
            <View style={{height: 64}}/>
            <FormButton 
                text={loading ? "Logging in..." : "Login"}
                onPress={handleSubmit(submitPress)}

            />
            <View style={{height: 12}}/>
            <FormButton 
                onPress={() => props.navigation.navigate("loginSelection")}
                text={"Back"}
                >
            </FormButton>
           
        </View>
        </TouchableWithoutFeedback>
        </ImageBackground>
    )
    /*
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };
  */
}

export default signin;


