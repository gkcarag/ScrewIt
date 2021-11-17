import { View, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles";

const signup = (props) => {
    const {
        control,
        handleSubmit, 
        formState: {errors, isValid}
    } = useForm();
    return(
        <View style={styles.loginScreen}>
            <Controller
                control={control}
                name="name"
                render={({field: {onChange, value, onBlur}}) => (
                    <TextInput
                        iconName="person"
                        iconType="MaterialIcons"
                        placeholder="Enter your name here"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                    />
                )}
            />
            <Button title='Submit' /*onPress={handleSubmit(onSubmit)} */ 
            />
            <Text>
                sign up screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </View>
    )
};

export default signup;