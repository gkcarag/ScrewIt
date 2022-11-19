import { View, SafeAreaView, ImageBackground, Image, Pressable } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const loginSelection = (props) => {
    return (
        <ImageBackground style={styles.loginScreen} source={require('../pictures/intro.png')}>
            <Image style={styles.logo} source={require('../pictures/ScrewItLogo.png')}></Image>
            <View style={styles.loginContainer}>
                <StatusBar style="auto" />
                <TouchableOpacity
                    style={styles.button}
                    title="login"
                    onPress={() => props.navigation.navigate("signin")}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    title="loginGuest"
                    onPress={() => props.navigation.navigate("betaNavigation")}
                >
                    <Text>
                        Login as Guest
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={styles.clickText}
                    title="signup"
                    onPress={() => props.navigation.navigate("signup")}
                >
                    <Text>
                        Sign up!
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.clickText}
                    title="forgotpassword"
                    onPress={() => props.navigation.navigate("forgotPassword")}>
                    <Text style={styles.psswrd}>
                        Forgot password?
                    </Text>
                </Pressable>
                {/* <TouchableOpacity
                    style={styles.button}
                    title="forgotpassword"
                    onPress={() => props.navigation.navigate("chat")}
                >
                    <Text>
                        Chat
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    title="rapLobby"
                    onPress={() => props.navigation.navigate("rapLobby")}
                >
                    <Text>
                        Lobby
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    title="rapLobby"
                    onPress={() => props.navigation.navigate("rapWait")}
                >
                    <Text>
                    rapWait
                    </Text>
                </TouchableOpacity> */}
            </View>

        </ImageBackground>
    )
};

export default loginSelection;