import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles.js";
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const forgotPassword = () => {

    const submitPress = data => {
        console.log(data);
    }

    const { control, handleSubmit, error } = useForm();
    return(
        <View style={styles.loginScreen}>
            <Text>
                forgot password screen
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
            <Button onPress={() => props.navigation.navigate("loginSelection")}>
                Back
            </Button>
        </View>
    )
};

export default forgotPassword;