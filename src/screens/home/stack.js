import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import betaNavigation from './betaNavigation';
import gameLibrary from './gameLibrary';
import profile from './profile';
import chat from './chat';
import connection from '../../../connection';

const Stack = createStackNavigator();

function stack() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="betaNavigation">
                <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                <Stack.Screen name="betaNavigation" component={betaNavigation} options={{ headerShown: false}}/>
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                <Stack.Screen name="chat" component={chat} options={{ headerShown: false}} />
                <Stack.Screen name="connection" component={connection} options={{ headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stack;