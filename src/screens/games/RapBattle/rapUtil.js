//Hold all the assests that will be used in the game. 
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

// Fit The Screen.
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

//Scores
export const SCORE = 1;

var words = [
    "America",
    "Balloon",
    "Biscuit",
    "Blanket",
    "Chicken",
    "Chimney",
    "Country",
    "Cupcake",
    "Curtain",
    "Diamond",
    "Eyebrow",
    "Fireman",
    "Florida",
    "Germany",
    "Harpoon",
    "Husband",
    "Morning",
    "Octopus",
    "Popcorn",
    "Printer",
    "Sandbox",
    "Skyline",
    "Spinach"
  ];

  // Gets a Random Phrase from the work bank on top.
  export const RandomPhrase = () =>{
      let phrase = Object.keys(words);
      phrase = [...words];
      return phrase [Math.floor(Math.random()*phrase.length)];
  }


