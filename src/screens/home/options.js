import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const options = (props) => {
    return(
        <SafeAreaView>
            <Text>
                forgot password screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default options;