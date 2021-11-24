import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import betaNavigation from './betaNavigation';
import gameLibrary from './gameLibrary';
import forgotPassword from '../auth/forgotPassword';
import guest from '../auth/guest';
import loginSelection from '../auth/loginSelection';
import signin from '../auth/signin';
import signup from '../auth/signup';
import lobby from './lobby';
import options from './options';
import profile from './profile';
import test1 from './test1';

const Stack = createStackNavigator();

function stack() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginSelection">
                <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                <Stack.Screen name="betaNavigation" component={betaNavigation} options={{ headerShown: false}}/>
                <Stack.Screen name="forgotPassword" component={forgotPassword} options={{ headerShown: false}} />
                <Stack.Screen name="guest" component={guest} options={{ headerShown: false}} />
                <Stack.Screen name="loginSelection" component={loginSelection} options={{ headerShown: false}} />
                <Stack.Screen name="signin" component={signin} options={{ headerShown: false}} />
                <Stack.Screen name="signup" component={signup} options={{ headerShown: false}} />
                <Stack.Screen name="lobby" component={lobby} options={{ headerShown: false}} />
                <Stack.Screen name="options" component={options} options={{ headerShown: false}} />
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                <Stack.Screen name="test1" component={test1} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stack;