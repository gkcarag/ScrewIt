import { SafeAreaView, Dimensions, StyleSheet, View } from "react-native";
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
export default function rapbattle(){


  const [started, setStarted] = useState(false); // Start Game Bool
  const [locked, phrLocked] = useState(false);
  const [phrase, setPhrase] = useState(' ');
  const [lockPhrase, setLockPhrase] = useState(' ');

  

  const words = [
    {text: 'A potato flew across the room', key: 1},
    {text: 'What the dog doin', key: 2},
    {text: 'Ratiooooooooo', key: 3},
    {text: 'The pathways', key: 4}
  ];

  const changeTextValue = () => {
    const len = words.length;
    setPhrase(words[Math.floor(Math.random() * len)].text)
  }
  
  console.log(phrase);

  const submitPhrase = (p) => {
    p.preventDefault();
    const valid = phrase != null;
    if(!valid){
      return;
    }else{
      //setStatus("Rap Phrase Submitted!")
    }
  };

  const phraseLOCKED = () => {
    // Phrase Needs to be locked in before game in started.
    phrLocked(true);
    setLockPhrase(phrase);
  }

  const start = () => {
    const pr = (Math.floor(Math.random() * Phrases.length));
    setPhrase(pr);
    setStarted(true); // this starts the actual game. 
  }

  if(started && locked){
    return(
      <View style={styles.contentView}>
      <SafeAreaView>
          <Text style={styles.subHeader}>Phrase: {lockPhrase} </Text>
          <TextInput string={phrase} onChange={(p) => setPhrase(p.target.value)}/>
          <Button type="submit">Submit</Button>
          <Button style={styles.goBack} onPress={() => this.props.navigation.goBack()}>
              Go Back
          </Button>
      </SafeAreaView>
      </View>
  )
  }else{
    return(
      <SafeAreaView>
        <Button type="button" onPress={start}> START GAME</Button>
        <Text style={styles.subHeader}>Phrase: {phrase} </Text>
          <View style={styles.buttonsContainer}>
            <Button style={styles.gen} onPress = {changeTextValue}>Change Phrase</Button>
            <Button style={styles.gen} onPress = {phraseLOCKED}>Lock Phrase</Button>
          </View>
        <Button style={styles.goBack} onPress={() => this.props.navigation.goBack()}>
              Go Back
          </Button>
      </SafeAreaView>
    )
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