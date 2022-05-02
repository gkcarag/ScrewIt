import { SafeAreaView, Modal, View, Alert, StyleSheet, Pressable, ImageBackground } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import styles from "../../styles";

export default class rapWait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomID: ' ',
            userConnected: [],
        } 
    }

    render() {
        return(
            <ImageBackground style={styles.loginScreen} source={require('../../pictures/intro.png')}>

            </ImageBackground>
        );
    }
}