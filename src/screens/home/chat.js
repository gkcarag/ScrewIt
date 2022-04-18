import { SafeAreaView, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";

const rooms = {};

export default class chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        }
        
    }

    //chat app functional between multiple users, but only locally for now
    componentDidMount(){
        this.socket = io("http://192.168.1.249:3001"); //replace parameter with your own local ip
        this.socket.on("chat message", (msg, id) => {
            this.setState({ chatMessages: [...this.state.chatMessages, msg] });
        });
    }

    submitChatMessage(){
        this.socket.emit("chat message", this.state.chatMessage, this.socket.id);
        this.setState({chatMessage: ""});
        
    }

    joinRoom(){
        this.socket.emit("joinRoom");
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
                    onSubmitEditing={() => this.submitChatMessage()}
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
                {chatMessages}
            </SafeAreaView>
        );
    }
}