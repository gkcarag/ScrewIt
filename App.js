import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Component} from 'react';
window.navigator.userAgent = 'react-native';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigator from './src/screens/home/stack';
import {SafeAreaView} from "react-native";
import Amplify from 'aws-amplify';
//import Amplify, {Auth} from 'aws-amplify';
//import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);

class App extends Component{
  render(){
    //Auth.signOut();
    return(
      <Navigator/>
    );
  };
};
/*
const signUpConfig = {
  header: "Custom Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: false,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "password",
    }
  ]
}
*/
//export default withAuthenticator(App, { signUpConfig });
export default App;