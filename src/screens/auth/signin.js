import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const signin = (props) => {
    return(
        <SafeAreaView>
            <Text>
                signin screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default signin;