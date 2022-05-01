import { SafeAreaView, Modal, View, Alert, StyleSheet, Pressable } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import styles from "../../styles";



export default class rapLobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: "",
            modalCreateVisible: false,
            modalJoinVisible: false
        } 
    }

    componentDidMount() {
        this.socket = io("http://192.168.1.249:3001");
    }

    setModalCreateVisible = () => {
        this.setState( prevState => ({ 
            modalCreateVisible: !prevState.modalCreateVisible })
        )
    }

    setModalJoinVisible = () => {
        this.setState( prevState => ({
            modalJoinVisible: !prevState.modalJoinVisible})
        )
    }

    //create user made room with user ID as room name
    createRoom = () => {
        console.log("Created Room");
        this.socket.emit("createRoom", this.state.roomName);
        this.setModalCreateVisible(true);
    }

    //join other user's room through their ID
    joinRoom = () => {
        console.log("Joined Room");
        this.socket.emit("joinRoom", this.state.roomName);
        this.setModalJoinVisible(true);
    }

    render() {
        const { modalCreateVisible } = this.state;
        const { modalJoinVisible } = this.state;
        return(
            <SafeAreaView>
                
                <Modal
                    animationType="slide"
                    visible={ modalCreateVisible }
                >
                    <View style={styles.centered}>
                        <View style={styles.modalView}>
                            <Button style={[styles.button, styles.buttonOpen]}
                                onPress={ this.setModalCreateVisible }
                            >
                                <Text>Back</Text>
                            </Button>
                            <Text>Create Room</Text>
                            <TextInput
                                style={{height:10, borderWidth: 2}}
                                autoCorrect ={false}
                                value={this.state.roomName}
                                onSubmitEditing={() => this.createRoom }
                                onChangeText={ roomName => {
                                    this.setState({ roomName });
                                }}
                            />
                            <Button onPress= { this.createRoom }>
                                <Text>
                                    Create Room
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Modal>



                <Modal
                    animationType="slide"
                    visible={ modalJoinVisible }
                >
                    <View style={styles.centered}>
                        <View style={styles.modalView}>
                            <Button style={[styles.button, styles.buttonOpen]}
                                onPress={ this.setModalJoinVisible }
                            >
                                <Text>Back</Text>
                            </Button>
                            <Text>Join Room</Text>
                            <TextInput
                                style={{height:10, borderWidth: 2}}
                                autoCorrect ={false}
                                value={this.state.roomName}
                                onSubmitEditing={() => this.joinRoom }
                                onChangeText={ roomName => {
                                    this.setState({ roomName });
                                }}
                            />
                            <Button onPress= { this.joinRoom }> 
                                <Text>
                                    Join Room
                                </Text>
                            </Button>
                            
                        </View>
                    </View>
                </Modal>

                <Button onPress = { this.setModalCreateVisible }>
                    <Text> Create Room </Text>
                </Button>
                <Button onPress = { this.setModalJoinVisible}>
                    <Text> Join Room </Text>
                </Button>

            </SafeAreaView>

        );
    }
}


//onRequestClose={() => { }}
/*
const raptest = (props) => {
    return(
        // write function that reads text file and display random phrase to screen
        <div></div>
    )
};

export default raptest;
*/