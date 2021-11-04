import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

//gonna need props for navigation to other pages
const profile = (props) => {
    return(
        <SafeAreaView>
            <Text>
                profile testing testing testing
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default profile;