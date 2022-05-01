import { SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import { StyleSheet, View, TouchableHighlight, ImageBackground, Image } from 'react-native';
import React from "react";
import styles from "../styles";

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
        <Image style={styles.plogo} source={require('../../../assets/default_profile_pic.png')}/>
        </View>

            <Text style={styles.title}>
                COMMING SOON
            </Text>
            <Button style={styles.button}onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </ImageBackground>
    )
};

export default profile;