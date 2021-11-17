import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles.js";

const forgotPassword = (props) => {
    return(
        <View style={styles.loginScreen}>
            <Text>
                forgot password screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </View>
    )
};

export default forgotPassword;