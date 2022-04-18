import { SafeAreaView, Dimensions, StyleSheet, View, Keyboard } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React, { Component, useState } from "react";
import io from "socket.io-client";

import Phrases from './rbPhrases';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

//const [index, setIndex] = useState();
//const gen = () =>{
//    const index = Math.floor(Math.random() * Phrases.length);
//    setIndex(index);
//}
export default class rapbattle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      phrase: Phrases[0].phrase
    };
}

  randomPhrase(){
    const rand = Math.floor(Math.random() * Phrases.length);
    return Phrases[rand];
  }

  newPhrase = () => {
    const genRandPhrase = this.randomPhrase();
    this.setState({
      phrase: genRandPhrase.phrase
    });
  }

  render(){
    return(
      <SafeAreaView>
        <Text style={styles.subHeader}>Hello {this.phrase}</Text>
        <Button style={styles.gen} onPress = {this.newPhrase}> New Phrase </Button>
        <Button onPress={() => this.props.navigation.goBack()}>
          Go Back
        </Button>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    contentView: {
      flex: 1,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 20,
    },
    subHeader: {
      backgroundColor : "#7DF6F2",
      textAlign : "center",
      paddingVertical : 20,
      marginBottom : 10,
      fontSize: 16,
      fontWeight: 'bold'
    },
    gen: {
        marginHorizontal: 50,
        height: 50,
        width: 200,
        textAlign: 'center',
        marginVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#FA3763',
        textAlign: 'center'
    },
    goBack: {
      marginTop: 580,
      paddingVertical : 20,
      backgroundColor : "#A94B4B",
      textShadowColor : "white",
    }
  });