import { ImageBackground, SafeAreaView, Dimensions, StyleSheet, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, PlatformColor, Platform} from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import React, { Component, useState } from "react";
import io from "socket.io-client";
import Phrases from './rbPhrases';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
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
      users: []
    };
}

componentDidMount(){
  this.socket = io("http://192.168.1.13:3001"); //replace parameter with your own local ip
  
  this.socket.on("outputVerse", msg => {
    this.setState({ phrasesArray: [...this.state.phrasesArray, msg] })
  })
}

componentWillUnmount(){
  this.socket.emit("socketDisc")
  this.socket.disconnect()
}

submitVerse = () => {
  this.socket.emit("submitVerse", this.state.phraseInput);
  this.setState({phraseInput: ""});
}

  render(){
    const phrasesArray = this.state.phrasesArray.map(phraseInput => <Text key={phraseInput}>{phraseInput}</Text>)
    return(
      <ImageBackground style={{flex: 1}} source={require('../../pictures/wall2.jpg')}>
        <Text style={styles.title}>
        <MaterialCommunityIcons name="microphone-variant" size={50} color="#8eff7a"/>
          RAP BATTLE !
          <MaterialCommunityIcons name="microphone-variant" size={50} color="#8eff7a"/>
        </Text>
  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
        <View
        style={styles.phraseBox}>
          <Text>
            INITIAL PHRASE HERE
          </Text>

          <View>
            {phrasesArray}

          </View>
          
          
        </View>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{position: 'absolute', bottom: 64, width: '100%'}}
        >
            <View>
              <TextInput
                MaterialCommunityIcons = 'microphone-variant'
                placeholder="Enter your Verse!"
                style={styles.input}
                autoCorrect ={false}
                value={this.state.phraseInput}
                onSubmitEditing={ this.submitVerse }
                onChangeText={phraseInput => {
                this.setState({ phraseInput });
                  }}
              />

              <Button style={styles.btl}  color= "#ff4d1c" fontWeight='bold' onPress={() => {this.setState({phrasesArray: []});this.props.navigation.navigate("library")}}>
                  Back to Library
              </Button>
            </View>
        </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
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
    },
    phraseBox: {
      top: 20, 
      borderWidth: 2, 
      padding: 10, 
      margin: 16, 
      backgroundColor: '#fabef1', 
      alignItems: 'center',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
    },
    btl: {
      marginTop: 30,
      marginLeft: 50,
      marginRight: 50,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: "black", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
      backgroundColor: "#b5b4b3"
    },
    input: {
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      height:40,
      borderWidth: 2,
      margin: 16
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 40,
      textAlign: 'center',
      color: "#caff99",
    }
  });