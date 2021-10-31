import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={() => {
        alert('Pressed button')
      }}>
        <View style={styles.icon1}></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        alert('Pressed button')
      }}>
        <View style={styles.icon2}></View>
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
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  icon1: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  icon2: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    height: 100,
    backgroundColor: "lightgreen",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
});
