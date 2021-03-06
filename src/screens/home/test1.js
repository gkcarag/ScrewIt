import { SafeAreaView, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";

export default class test1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        }
    }

    //chat app functional between multiple users, but only locally for now
    componentDidMount(){
        this.socket = io("http://192.168.1.13:3000"); //replace parameter with your own local ip
        this.socket.on("chat message", msg => {
            this.setState({ chatMessages: [...this.state.chatMessages, msg] });
        });
    }

    submitChatMessage(){
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({chatMessage: ""});
    }

    render(){
        const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
        return(
            <SafeAreaView>
                <Text>
                    test screen
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