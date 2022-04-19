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
      phraseInput: "",
      phrasesArray: []
    };
}

componentDidMount(){
  this.socket = io("http://192.168.50.179:3001"); //replace parameter with your own local ip
  this.socket.on("user verse", vrs => {
      this.setState({ phrasesArray: [...this.state.phrasesArray, vrs] });
  });
}

submitVerse(){
  this.socket.emit("user verse", this.state.phraseInput);
  this.setState({phraseInput: ""});
}


    //rand = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    //return Phrases[rand];
 

  //newPhrase = () => {
  //  const genRandPhrase = this.randomPhrase();
  //  this.setState({
  //    phrase: genRandPhrase.phrase
  //  });
  //}

  wordList = [
    'Marcelo',
    'Lizzette',
    'Pauline',
    'Fumiko',
    'Tomasa',
    'Bertha',
    'Antoinette',
    'Tianna',
    'Ammie',
    'Victorina',
    'Marlon',
    'Jules',
    'Arletha',
    'Ellyn',
    'Karol',
    'Corrin',
    'Josephine',
  ]

  render(){
    const phrasesArray = this.state.phrasesArray.map(phraseInput => <Text key={phraseInput}>{phraseInput}</Text>)
    return(
      <SafeAreaView>
        <TextInput
        placeholder="Enter your Verse!"
          style={{height:40, borderWidth: 2}}
          autoCorrect ={false}
          value={this.state.phraseInput}
          onSubmitEditing={() => this.submitVerse()}
          onChangeText={phraseInput => {
          this.setState({ phraseInput });
          }}
        />
        <Button onPress={() => this.props.navigation.goBack()}>
          Go Back
        </Button>
      {phrasesArray}
      {phrasesArray[0]}/*fdsf*/
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