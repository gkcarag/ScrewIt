import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles";
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const forgotPassword = (props) => {

    const submitPress = data => {
        console.log(data);
    }

    const { control, handleSubmit, error } = useForm();
    return(
        <View style={styles.loginScreen}>
            <Text>
                Please enter your email and we'll send you an email to reset your password
            </Text>
            <FormInput
                name="email"
                placeholder="email"
                control={control}
            />
            <FormButton 
                onPress={handleSubmit(submitPress)}
                text="Submit"
            />
            <Button onPress={() => props.navigation.pop(1)}>
                Back
            </Button>
        </View>
    )
};

export default forgotPassword;