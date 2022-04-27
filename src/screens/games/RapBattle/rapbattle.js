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
      phrasesArray: [],
      rapperID: [],
      versSTATE: false,
      gameStart: false,
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
  this.setState({versSTATE: true});
  this.setState({gameStart: true});
}

getRapper(){
  const getRapperID = Object.keys(this.rapperID);
  setRapper = getRapperID[Math.floor(Math.random() * getRapperID.length)];
}
  render(){
    const phrasesArray = this.state.phrasesArray.map(phraseInput => <Text key={phraseInput}>{phraseInput}</Text>)
    if(this.gameStart && this.versSTATE){
      return(
        <SafeAreaView>
          <Text style={styles.subHeader}>Phrase: {phrasesArray[0]} </Text>
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
      {phrasesArray[0]}
      </SafeAreaView>
    );
    }else{
      return(
      <SafeAreaView>
      <Text style={styles.subHeader}> LOBBY </Text>
      <TextInput
      placeholder="Enter The Starting Verse!"
      style={{height:40, borderWidth: 2}}
      autoCorrect ={true}
      value={this.state.phraseInput}
      onChangeText={phraseInput => {
      this.setState({ phraseInput });
      }}
      />
      <Button onPress={() => this.submitVerse()}>Lock Starting Verse</Button>
      <Button onPress={() => this.props.navigation.goBack()}>
        Go Back
      </Button>
      {phrasesArray}
      {phrasesArray[0]}
      </SafeAreaView>
      );
    }
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