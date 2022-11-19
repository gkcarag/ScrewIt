import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

//gonna need props for navigation to other pages
const betaNavigation = (props) => {
    return(
        <View style={styles.container}>
          <Image source={require('../pictures/ScrewItLogo.png')}/>
          <StatusBar style="auto" />

          <TouchableHighlight 
            style={styles.icon1}
            onPress={() => props.navigation.navigate("library")}>
            <Image style={styles.libIcons} source={require('../pictures/LibraryIcon.png')}></Image>
              <Text style={styles.text}>
                Library
              </Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => props.navigation.navigate("profile")}>
            <View style={styles.icon1}>
            <Image style={styles.libIcons} source={require('../pictures/ProfileIcon.png')}></Image>
              <Text style={styles.text}>
              Profile
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { alert('Pressed button')}}>
            <View style={styles.icon1}>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => props.navigation.navigate("chat")}>
            <View style={styles.icon1}>
            <Image style={styles.libIcons} source={require('../pictures/ChatIcon.png')}></Image>
              <Text style={styles.text}>
                Chat
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { alert('Pressed button')}}>
            <View style={styles.icon1}>
            </View>
          </TouchableHighlight>
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
      borderRadius: 20,
      marginTop:10,
      marginBottom:10
    },
    text: {
      fontSize: 25,
      marginLeft: 40
    },
    libIcons: {
      width: 50,
      height: 50,
      marginLeft: 50,
      marginTop: 25
    }
});

export default betaNavigation;