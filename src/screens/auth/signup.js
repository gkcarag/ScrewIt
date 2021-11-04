import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const signup = (props) => {
    return(
        <SafeAreaView>
            <Text>
                sign up screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default signup;