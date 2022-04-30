import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from "react-hook-form";

const FormInput = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    return (
        //<View style={styles.container}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
                    <>
                    <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                    <TextInput
                        placeholder={placeholder}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                    </View>
                    {error && (
                        <Text style={{color: 'red', alignSelf: 'stretch'}}> {error.message || 'Error'} </Text>
                    )}
                    </>
                )}
            />
       // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 8,
        height: 40
    },
    input: {},

});

export default FormInput;
