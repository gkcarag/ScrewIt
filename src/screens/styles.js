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
      flexBasis: 150,
      borderWidth: 2,
      width: 150,
      height: 150,
      backgroundColor: "lightblue",
      borderRadius:20,
      marginTop:10,
      marginBottom:10
    },
    icon2: {
      flex: 1, 
      borderStyle: 'solid',
      flexBasis: 150,
      borderWidth: 2,
      width: 150,
      height: 150,
      backgroundColor: "lightgreen",
      borderRadius:20,
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
      backgroundColor: "#a2dea8",
      //flex: 1,
      justifyContent: 'center',
      width: "60%",
      height: "50%",
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 70
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      padding: 10,
      borderStyle: 'solid',
      borderRadius: 20,
      borderWidth: 1,
      margin: 10,
      elevation: 2
    },
    buttonText: {
      fontSize: 50,
    },
    clickText: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      color: 'blue'
    },
    logo: {
      width: 170,
      height: 170,
      marginBottom: 40
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "#78c6cf",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        marginTop: '50%'
    }, 
    buttonOpen: {
        backgroundColor: "#F194FF"
    },
    buttonClose: {
        backgroundColor: "#2196F3"
    },
    lobbybutton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#78c6cf',
      padding: 10,
      borderStyle: 'solid',
      borderRadius: 20,
      borderWidth: 1,
      margin: 10,
      elevation: 2,
      marginTop: '30%',
      borderColor: '#f86dfc'
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 40,
      textAlign: 'center',
      color: "black",
    },
    input: {
      paddingHorizontal: 12,
      width: '100%',
      backgroundColor: '#F0F0F0',
      borderStyle: 'solid',
      marginLeft: 5,
      overflow: 'visible',
      marginTop: 5,
      borderWidth: 5,
      borderColor: 'lightgrey',
      borderRadius: 0,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderColor: "#f86dfc",
    },
    stanText: {
      fontSize: 30,
      fontWeight: '400',
      color: '#f86dfc',
    },
    psswrd: {
      color: '#fc3564',
      fontWeight: 'bold'
    },
    plogo: {
      width: 200,
      height: 200,
      marginBottom: '50%'
    },
    csoon: {
      borderColor: 'grey',
      paddingHorizontal: "100%"
    }
});