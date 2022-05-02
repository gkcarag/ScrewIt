import { SafeAreaView, Modal, View, Alert, StyleSheet, Pressable, ImageBackground } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import styles from "../../styles";
import rapLobby from "./rapLobby";

export default class rapWait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomID: "",
            userConnected: [],
        } 
    }

    render() {

        const { navigation } = this.props;
        const { roomNum }= this.props.route.params;
        
        return(
            <ImageBackground style={styles.loginScreen} source={require('../../pictures/intro.png')}>
                <SafeAreaView>
                    <View style={{flex: 1, position: 'absolute'}}>
                    <Text>
                        {roomNum}
                    </Text>

                    <Button>
                        Start
                    </Button>
                    <View style={{height:16}}/>
                    <Button onPress={() => this.props.navigation.navigate("library")}>
                        Back
                    </Button>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        );
    }
}