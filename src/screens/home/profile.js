import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, TouchableHighlight, ImageBackground, Image } from 'react-native';
import React from "react";
import { TabActions } from "@react-navigation/native";
import gameLibrary from "./gameLibrary"

//gonna need props for navigation to other pages
const profile = (props) => {
    return(
        <ImageBackground style={{flex: 1}} source={require('../pictures/intro.png')}>
        <View style={{
            flex: 1, 
            alignItems:'center',
            
        }}>
            <Image style={styles.logo} source={require('../../../assets/default_profile_pic.png')}/>
        </View>
        <SafeAreaView>
            <Text>
                Profile
            </Text>
            <Button style={styles.buttons}onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    buttons: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default profile;