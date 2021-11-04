import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const loginSelection = (props) => {
    return(
        <SafeAreaView>
            <Text>
                login selection `{'>'}` guest/signin/signup
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default loginSelection;