import { SafeAreaView, Modal, View, Alert, StyleSheet, Pressable, ImageBackground } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import styles from "../../styles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';




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
            <ImageBackground style={{flex: 1}} source={require('../../pictures/intro.png')}>
            <Text style={styles.title}>
                LOBBY
            </Text>
                <Modal
                    animationType="slide"
                    visible={ modalCreateVisible }
                >
                    <ImageBackground style={{flex: 1}} source={require('../../pictures/intro.png')}>
                        <View style={styles.modalView}>

                            <Text style={styles.stanText}>ENTER ROOM NAME</Text>
                            <TextInput
                                style={styles.input}
                                autoCorrect ={false}
                                value={this.state.roomName}
                                onSubmitEditing={() => this.createRoom }
                                onChangeText={ roomName => {
                                    this.setState({ roomName });
                                }}
                            />
                            <Button style={styles.button} onPress= { this.createRoom }>
                                <Text>
                                    Create Room
                                </Text>
                            </Button>
                            <Button style={[styles.button, styles.buttonOpen]}
                                onPress={ this.setModalCreateVisible }
                            >
                                <Text>Back</Text>
                            </Button>
                        </View>
                    </ImageBackground>
                </Modal>



                <Modal
                    animationType="slide"
                    visible={ modalJoinVisible }
                >
                    <ImageBackground style={{flex: 1}} source={require('../../pictures/intro.png')}>
                        <View style={styles.modalView}>

                            <Text style={styles.stanText}>JOIN ROOM</Text>
                            <TextInput
                                style={styles.input}
                                autoCorrect ={false}
                                value={this.state.roomName}
                                onSubmitEditing={() => this.joinRoom }
                                onChangeText={ roomName => {
                                    this.setState({ roomName });
                                }}
                            />
                            <Button style={styles.button} onPress= { this.joinRoom }> 
                                <Text>
                                    Join Room
                                </Text>
                            </Button>
                            <Button style={[styles.button, styles.buttonOpen]}
                                onPress={ this.setModalJoinVisible }
                            >
                                <Text>Back</Text>
                            </Button>
                            
                        </View>
                    </ImageBackground>
                </Modal>

                <Button style={styles.lobbybutton} onPress = { this.setModalCreateVisible }>
                    <Text style={styles.stanText}> Create Room </Text>
                </Button>
                <Button style={styles.lobbybutton} onPress = { this.setModalJoinVisible}>
                    <Text style={styles.stanText}> Join Room </Text>
                </Button>
                <Button style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.props.navigation.navigate("loginSelection")}
                >
                    <Text>Back</Text>
                </Button>

            </ImageBackground>

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