import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

//gonna need props for navigation to other pages
const chat = (props) => {
    return(
        <SafeAreaView>
            <Text>
                Chat Testing
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default chat;