import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

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
        <TouchableHighlight onPress={() => { alert('Pressed button')}}>
          <View style={styles.icon2}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { alert('Pressed button')}}>
          <View style={styles.icon1}></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { alert('Pressed button')}}>
          <View style={styles.icon1}></View>
        </TouchableHighlight>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
      backgroundColor: '#fff',
     // alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-evenly'
    },
    icon1: {
      flex: 1,
      borderStyle: 'solid',
      //borderColor: 'black',
      flexBasis: 150,
      borderWidth: 2,
      width: 150,
      height: 150,
      backgroundColor: "lightblue",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      marginTop:10,
      marginBottom:10
    },
    icon2: {
      flex: 1, 
      borderStyle: 'solid',
      //borderColor: 'black',
      flexBasis: 150,
      borderWidth: 2,
      width: 150,
      height: 150,
      backgroundColor: "lightgreen",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      marginTop:10,
      marginBottom:10
    },
    opacity: {
      height: 150
    }
});

export default betaNavigation;