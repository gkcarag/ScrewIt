import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import betaNavigation from './betaNavigation';
import gameLibrary from './gameLibrary';

const Stack = createStackNavigator();

function stack() {
    return ( 
        <Stack.Navigator initialRouteName="library">
            <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
            <Stack.Screen name="betaNavigation" component={betaNavigation} options={{ headerShown: false}}/>
            
        </Stack.Navigator>
    );
}

export default stack;