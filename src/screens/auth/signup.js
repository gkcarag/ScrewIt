import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View, Button  } from 'react-native';
import styles from '../styles';
import { useForm, Controller } from 'react-hook-form';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

// ** edits made by patrick, to test crud requests **
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("../server/db");
    
// middleware
app.use(cors());
app.use(express.json()); //req.body

// queries
// add new user
/*
app.post("/adduser", async(req,res) => {
    try {
        //description is in json format
        //const { description } = req.body;
        const newUser = await pool.query(
            "INSERT INTO USER_INFO (id, username, email, pword) VALUES ($1,$2,$3,$4)",
            //[description]
        );

        res.json(newUser.rows[0]);
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

// select all users
app.get("/getUsers", async(req,res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM USER_INFO");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});
*/

// testing out below command first
/*
app.get("/getUser/:username", async(req,res) => {
    try{
        const { id } = req.params;
        const getUser = await pool.query(
            "SELECT * FROM USER_INFO WHERE username = $1", [username]);
        res.json(getUser.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
*/
// ** end edits **

const signup = () => {

    const submitPress = data => {
        console.log(data);
    }

    const { control, handleSubmit, error } = useForm();
    return(
        <View style={styles.loginScreen}>
            <FormInput
                name="email"
                placeholder="email"
                control={control}
            />
            <FormInput 
                name="username"
                placeholder="username"
                control={control}
            />
            <FormInput
                name="password"
                placeholder="password"
                control={control}
                secureTextEntry
            />

            <FormButton 
                onPress={handleSubmit(submitPress)}
                text="Submit"

            />
            
           
        </View>
    )
    /*
  const [isBillingDifferent, setIsBillingDifferent] = useState(false);

  const toggleBilling = () => {
    setIsBillingDifferent((prev) => !prev);
  };
  */


}

export default signup;


