import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";

const guest = (props) => {
    return(
        <SafeAreaView>
            <Text>
               guest login 
            </Text>
            <Button onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

export default guest;