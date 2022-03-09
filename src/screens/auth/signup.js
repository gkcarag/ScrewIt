import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View, Button  } from 'react-native';
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const signup = () => {

    const submitPress = data => {
        console.log(data);
    }

    const { control, handleSubmit, error } = useForm();
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
                onPress={handleSubmit(submitPress)}
                text="Submit"

                />
            
           
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


