import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigator from './src/screens/home/stack';

export default function App() {
  return (
    <Navigator />
  );
};
