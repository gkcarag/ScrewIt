/*
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
// Client Things
const io = require("socket.io-client");
export default class connection extends Component{

    constructor(props){
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        };
    }
    componentDidMount(){
    this.socket = io("http://192.168.50.179:3000");
    this.socket.on("chat message", msg => {
        this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

    submitChatMessage() {
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({ chatMessage: ""});
    }
  render(){
      console.log("I am in the code");
      const chatMessages = this.state.chatMessages.map(chatMessage => (
          <Text key={chatMessage}>{chatMessage}</Text>
      ));

      return (
          <View style={styles.container}>
              <TextInput
              style = {{ bottom: -50 ,height: 30, borderWidth: 2}}
                //autoCorrect = {true}
                value = {this.state.chatMessage}
                onSubmitEditing={() => this.submitChatMessage()}
                onChangeText = {chatMessage => {
                    this.setState({ chatMessage });
                }}
              />
              {chatMessages}
          </View>
      );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    }
  });
  */