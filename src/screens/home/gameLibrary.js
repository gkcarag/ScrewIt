import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import {Auth} from 'aws-amplify';


//gonna need props for navigation to other pages
const gameLibrary = (props) => {
  const signOut = () => {
    Auth.signOut();
  };
    return(
      <ImageBackground style={styles.container} source={require('../pictures/intro.png')}>
        <StatusBar style="auto" />
        <View>
        <Text style={styles.title}>
          LIBRARY
          </Text>
        <TouchableHighlight onPress={() => props.navigation.navigate("rapbattle")}>
          <View style={styles.icon1}>
            <Text style={styles.libText}>
              Rap Battle
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { props.navigation.navigate("chat")}}>
          <View style={styles.icon1}>
            <Text style={styles.libText}>
              Chat
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { props.navigation.navigate("chat")}}>
          <View style={styles.icon1}>
          <Text onPress={signOut} style={styles.signOut}>
            Sign out
          </Text>
          </View>
        </TouchableHighlight>
        </View>
      </ImageBackground>
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
      alignItems: "center",
      borderStyle: 'solid',
      //borderColor: 'black',
      flexBasis: 75,
      borderWidth: 2,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: "#47f5c9",
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      marginTop:50,
      marginBottom:20
    },
    icon2: {
      flex: 1, 
      borderStyle: 'solid',
      //borderColor: 'black',
      flexBasis: 75,
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
      width: 50,
      height: 10,
      flex: 1,
      marginTop: 10,
      justifyContent: "center"
    },
    vCon: {
      backgroundColor: "#a2dea8",
      //flex: 1,
      justifyContent: 'center',
      width: "60%",
      height: "30%",
      borderWidth: 1,
      borderRadius: 20,
    },
    signOut: {
      width: '100%',
      textAlign: 'center',
      color: 'red',
      marginTop: 'auto',
      marginVertical: 25,
      fontSize: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },
    libText: {
      fontSize: 20,
      fontWeight: 'bold'
    }, 
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 40,
      textAlign: 'center',
    }
});

export default gameLibrary;