import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import betaNavigation from './betaNavigation';
import gameLibrary from './gameLibrary';
import profile from './profile';
import loginSelection from '../auth/loginSelection';
import signin from '../auth/signin';
import signup from '../auth/signup';
import chat from './chat';
import connection from '../../../connection';
import rapUtil from '../games/RapBattle/rapbattle';
import rapbattle from '../games/RapBattle/rapbattle';
import test1 from './test1';

const Stack = createStackNavigator();

function stack() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginSelection">
                <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                <Stack.Screen name="betaNavigation" component={betaNavigation} options={{ headerShown: false}}/>
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                <Stack.Screen name="chat" component={chat} options={{ headerShown: false}} />
                <Stack.Screen name="loginSelection" component={loginSelection} options={{ headerShown: false}} />
                <Stack.Screen name="signin" component={signin} options={{ headerShown: false}} />
                <Stack.Screen name="signup" component={signup} options={{ headerShown: false}} />
                <Stack.Screen name="connection" component={connection} options={{ headerShown: false}} />
                <Stack.Screen name="rapbattle" component={rapbattle} options={{ headerShown: false}} />
                <Stack.Screen name="test1" component={test1} options={{ headerShown: true}} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stack;