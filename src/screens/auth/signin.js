import React, { Fragment, useState } from 'react';
import { Alert, View } from 'react-native';
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
        <View style={styles.loginScreen}>
            <FormInput 
                name="Username"
                placeholder="Username"
                control={control}
                rules={{
                    required: 'Username is required', 
                }}
            />
            <FormInput
                name="Password"
                placeholder="Password"
                control={control}
                rules={{
                    required: 'Password is required'
                }}
                secureTextEntry
            />
            <FormButton 
                text={loading ? "Logging in..." : "Login"}
                onPress={handleSubmit(submitPress)}

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

export default signin;


