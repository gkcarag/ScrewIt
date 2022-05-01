import { SafeAreaView, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const rooms = {};

export default class chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: [],
            roomName: ""
        } 
    }

    //chat app functional between multiple users, but only locally for now
    componentDidMount() {
        this.socket = io("http://192.168.1.249:3001"); //replace parameter with your own local ip
        this.socket.on("chat message", (msg, id) => {
            this.setState({ chatMessages: [...this.state.chatMessages, msg] });
        });
    }

    componentWillUnmount() {
        this.socket.emit("socketDisc")
        this.socket.disconnect()
    }

    submitChatMessage = () => {
        this.socket.emit("chat message", this.state.chatMessage, this.state.roomName);
        this.setState({chatMessage: ""}); 
    }

    createRoom = () => {
        this.socket.emit("createRoom", this.state.roomName);
    }

    joinRoom = () => {
        this.socket.emit("joinRoom", this.state.roomName);
    }

    render(){
        const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
        return(
            <SafeAreaView>
                <Text>
                    testing chat screen
                </Text>
                <TextInput
                    style={{height:40, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.chatMessage}
                    onSubmitEditing={ this.submitChatMessage }
                    onChangeText={chatMessage => {
                        this.setState({ chatMessage });
                    }}
                />
                <Button onPress={() => this.props.navigation.goBack()}>
                    Go Back
                </Button>
                <Button onPress={() => this.props.navigation.goBack()}>
                    nothing button
                </Button>

                <TextInput
                    style={{height:40, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.roomName}
                    onSubmitEditing={ this.createRoom }
                    onChangeText={roomName => {
                        this.setState({ roomName });
                    }}
                />

                <Button onPress={ this.createRoom }>
                    create room
                </Button>


                <TextInput
                    style={{height:40, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.roomName}
                    onSubmitEditing={ this.joinRoom }
                    onChangeText={roomName => {
                        this.setState({ roomName });
                    }}
                />
                <Button onPress={ this.joinRoom }>
                    join room 

                </Button>
                
                {chatMessages}
            </SafeAreaView>
        );
    }
}