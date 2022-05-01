import { SafeAreaView, Modal, View, Alert, StyleSheet, Pressable } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";



export default class rapLobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lobbyCode: "",
            roomName: "",
            modalVisible: false
        } 
    }

    componentDidMount() {
        this.socket = io("http://192.168.1.249:3001");
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    //create user made room with user ID as room name
    createRoom = () => {
        console.log("Created Room")
        this.socket.emit("createRoom", this.state.roomName);
        this.setModalVisible(true);
        //this.props.navigation.navigate("loginSelection");
    }

    //join other user's room through their ID
    joinRoom = () => {
        console.log("Joined Room")
        this.socket.emit("joinRoom", this.state.roomName);
        this.setModalVisible(true);
        //this.props.navigation.navigate("signin");
    }

    render() {
        const { modalVisible } = this.state;
        return(
            <SafeAreaView>
                <Modal
                    animationType="slide"
                    visible={ modalVisible }
                >
                    <View style={styles.centered}>
                        <View style={styles.modalView}>
                            <Pressable style={[styles.button, styles.buttonOpen]}
                                onPress={() => this.setModalVisible(false)}
                            >
                                <Text>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                    

                </Modal>
                <Text>Create Room</Text>
                <Button onPress={ this.createRoom }>Create Room</Button>
                <Text>Join Room</Text>
                <TextInput
                    style={{height:40, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.joinRoom }
                    onChangeText={lobbyCode => {
                        this.setState({ lobbyCode });
                    }}
                />
                <Button onPress= { this.joinRoom }>Join</Button>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
    }, 
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF"
    },
    buttonClose: {
        backgroundColor: "#2196F3"
    }
})

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