import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles.js';
import { Text, View, TouchableHighlight } from 'react-native';

//gonna need props for navigation to other pages
const betaNavigation = (props) => {
    return(
        <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableHighlight onPress={() => props.navigation.navigate("library")}>
          <View style={styles.icon1}>
            <Text>
              gameLibrary
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate("profile")}>
          <View style={styles.icon2}>
            <Text>
              profile
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate("test1")}>
          <View style={styles.icon1}>
            <Text>
              test1
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { alert('Pressed button')}}>
          <View style={styles.icon1}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { alert('Pressed button')}}>
          <View style={styles.icon1}>
          </View>
        </TouchableHighlight>
        
      </View>
    );
  }  

export default betaNavigation;