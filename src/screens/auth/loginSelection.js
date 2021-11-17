import { View, SafeAreaView } from "react-native";
import { Text, Button } from "react-native-paper";
import React from "react";
import styles from "../styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const loginSelection = (props) => {
    return (
        <View style={styles.loginScreen}>
            <View style={styles.loginContainer}>
                <StatusBar style="auto" />
                <TouchableOpacity
                    style={styles.button}
                    title="login"
                //onPress={() => props.navigation.navigate("")}
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
                <TouchableOpacity
                    style={styles.clickText}
                    title="signup"
                    onPress={() => props.navigation.navigate("signup")}
                >
                    <Text>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.clickText}
                    title="forgotpassword"
                    onPress={() => props.navigation.navigate("forgotPassword")}
                >
                    <Text>
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
};

export default loginSelection;