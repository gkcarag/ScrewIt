import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Component} from 'react';
window.navigator.userAgent = 'react-native';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigator from './src/screens/home/stack';

export default class App extends Component{
  render(){
    return(
      <Navigator/>
    );
  };
};
