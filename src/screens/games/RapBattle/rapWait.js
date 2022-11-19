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

    //test = rapLobby();

    componentDidMount() {
        this.socket = io("http://192.168.1.249:3001"); //replace parameter with your own local ip 
        this.socket.emit("getRoomName");
        this.socket.on("updateID", currentRoom => {
            this.setState({ roomID: currentRoom })
        })
        console.log("created new room");
        //console.log(this.props);
    }

    componentWillUnmount() {
        this.socket.emit("socketDisc")
        this.socket.disconnect()
    }

    render() {
        return(
            <ImageBackground style={styles.loginScreen} source={require('../../pictures/intro.png')}>
                <SafeAreaView>
                    <View style={{flex: 1, position: 'absolute'}}>
                    <Text>
                        {this.state.roomID}
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