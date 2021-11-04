import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import React from "react";

//gonna need props for navigation to other pages
const profile = (props) => {
    return(
        <SafeAreaView>
            <Text>
                profile testing testing testing
            </Text>
            <Button style={styles.buttons}onPress={() => props.navigation.pop()}>
                Go Back
            </Button>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    buttons: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default profile;