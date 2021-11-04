import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const lobby = (props) => {
    return(
        <SafeAreaView>
            <Text>
                lobby screen
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default lobby;