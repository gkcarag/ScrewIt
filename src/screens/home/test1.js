import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const test1 = (props) => {
    return(
        <SafeAreaView>
            <Text>
                test screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
            <Button onPress={() => props.navigation.goBack()}>
                ping server
            </Button>
        </SafeAreaView>
    )
};

export default test1;