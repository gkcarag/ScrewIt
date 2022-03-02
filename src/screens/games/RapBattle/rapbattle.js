import { SafeAreaView, Dimensions, StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import React, { useState } from "react";
//import TrackPlayer, {RepeatMode} from 'react-native-track-player';

import Phrases from './rbPhrases';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

//Scores
export const SCORE = 1;
const rapbattle =  (props) => {

    //await TrackPlayer.setupPlayer({});

    //await TrackPlayer.add({
     // url: require('./rapMusic/Duel_of_the_Fates.mp3')
   // });

    //TrackPlayer.setRepeatMode(RepeatMode.Queue);


    const [index, setIndex] = useState();
    const gen = () =>{
        const index = Math.floor(Math.random() * Phrases.length);
        setIndex(index);
    }
    return(
        <View style={styles.contentView}>
        <SafeAreaView>
            <Text style={styles.subHeader}>YOU WORD: {Phrases[index] && Phrases[index].phrase}</Text>
            <View style={styles.buttonsContainer}>
              <Button style={styles.gen} onPress = {gen}>Generate Word</Button>
            </View>
            <Button style={styles.goBack} onPress={() => props.navigation.goBack()}>
                Go Back
            </Button>
        </SafeAreaView>
        </View>
    )
};

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
export default rapbattle;