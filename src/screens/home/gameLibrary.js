import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import {Auth} from 'aws-amplify';

//gonna need props for navigation to other pages
const gameLibrary = (props) => {
  const signOut = () => {
    Auth.signOut();
  };
    return(
        <View style={styles.container}>
        <Image style={styles.img} source={require('../pictures/SILibrary.png')}></Image>
        <StatusBar style="auto" />
        <TouchableHighlight onPress={() => props.navigation.navigate("rapbattle")}>
          <View style={styles.icon1}>
            <Text>
              Rap Battle
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { props.navigation.navigate("chat")}}>
          <View style={styles.icon2}>
            <Text>
              Chat
            </Text>
          </View>
        </TouchableHighlight>
        <Text
          onPress={signOut}
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'red',
            marginTop: 'auto',
            marginVertical: 20,
            fontSize: 20,
          }}>
            Sign out
        </Text>
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
    },
    img: {
      alignContent: 'center',
      marginBottom: 10
    }
});

export default gameLibrary;