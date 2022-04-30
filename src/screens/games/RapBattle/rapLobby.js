import { SafeAreaView } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React from "react";
import { Component } from "react";
import io from "socket.io-client";



export default class rapLobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lobbyCode: ""
        } 
    }

    componentDidMount() {
        this.socket = io("http://192.168.1.249:3001");
    }

    //create user made room with user ID as room name
    createRoom = () => {
        console.log("hi");
        this.props.navigation.navigate("loginSelection");

    }

    //join other user's room through their ID
    joinRoom = () => {
        console.log("hi2");
        this.props.navigation.navigate("signin");
    }

    

    render() {
    
        return(
            <SafeAreaView>
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


/*
const raptest = (props) => {
    return(
        // write function that reads text file and display random phrase to screen
        <div></div>
    )
};

export default raptest;
*/