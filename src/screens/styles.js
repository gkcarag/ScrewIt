import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default StyleSheet.create({
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
      borderRadius:20,
      /*
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      */
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

    loginScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginContainer: {
      backgroundColor: "#A7C7E7",
      //flex: 1,
      justifyContent: 'center',
      width: "60%",
      height: "30%",
      borderWidth: 1,
      borderRadius: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 50,
    },
    clickText: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      color: 'blue'
    }
});