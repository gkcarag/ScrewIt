import { SafeAreaView, TextInput, View, ImageBackground } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";
import styles from '../styles';

const rooms = {};

export default class lobby extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: [],
            roomName: ""
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
        this.socket.emit("chat message", this.state.chatMessage, this.state.roomName);
        this.setState({chatMessage: ""});
        
    }

    createRoom(){
        this.socket.emit("createRoom", this.state.roomName);
    }

    joinRoom(){
        this.socket.emit("joinRoom", this.state.roomName);
    }

    render(){
        const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
        return(
            <ImageBackground style={styles.container} source={require('../pictures/intro.png')}>
            <SafeAreaView style={{flex: 1, width: '100%'}}>
                <View style={{padding: 32}}>
                <Text>
                    testing chat screen
                </Text>
                <TextInput
                    style={{backgroundColor: 'white',height:44, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.submitChatMessage()}
                    onChangeText={chatMessage => {
                        this.setState({ chatMessage });
                    }}
                />
                <View style={{height: 16}}/>
                <TextInput
                    placeholder="  Enter new Room ID"
                    style={{backgroundColor: 'white',height:44, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.roomName}
                    onSubmitEditing={() => this.createRoom()}
                    onChangeText={roomName => {
                        this.setState({ roomName });
                    }}
                />
                <View style={{height: 16}}/>
                <Button 
                    style={{
                        backgroundColor: 'lime',
                    }}
                    onPress={() => this.createRoom()}
                >
                    <Text>Create Room</Text>
                </Button>
                <View style={{height: 32}}/>
                <TextInput
                    placeholder="  Enter existing Room ID"
                    style={{backgroundColor: 'white',height:44, borderWidth: 2}}
                    autoCorrect ={false}
                    value={this.state.roomName}
                    onSubmitEditing={() => this.joinRoom()}
                    onChangeText={roomName => {
                        this.setState({ roomName });
                    }}
                />
                <View style={{height: 16}}/>
                <Button 
                    style={{
                        backgroundColor: 'blue',
                    }}
                    onPress={() => this.joinRoom()}
                >
                <Text style={{color: 'white'}}>
                    Join Room
                </Text>
                </Button>
                <View style={{height:64}}/>
                <Button style={{backgroundColor: 'red'}} onPress={() => this.props.navigation.navigate("library")}>
                    <Text style={{color: 'white'}}>
                    Go Back
                    </Text>
                </Button>
                {chatMessages}
                </View>
            </SafeAreaView>
            </ImageBackground>
        );
    }
}