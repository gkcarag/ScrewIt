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
import rapUtil from '../games/RapBattle/rapbattle';
import rapbattle from '../games/RapBattle/rapbattle';
import test1 from './test1';
import forgotPassword from '../auth/forgotPassword';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const stack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginSelection">
                <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                <Stack.Screen name="betaNavigation" component={TabStack} options={{ headerShown: false}}/>
                <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                <Stack.Screen name="chat" component={chat} options={{ headerShown: true}} />
                <Stack.Screen name="loginSelection" component={loginSelection} options={{ headerShown: false}} />
                <Stack.Screen name="signin" component={signin} options={{ headerShown: false}} />
                <Stack.Screen name="signup" component={signup} options={{ headerShown: false}} />
                <Stack.Screen name="forgotPassword" component={forgotPassword} options={{ headerShown: false}} />
                <Stack.Screen name="rapbattle" component={rapbattle} options={{ headerShown: false}} />
                <Stack.Screen name="test1" component={test1} options={{ headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const TabStack = () => (
    <Tab.Navigator initialRouteName="Apps">
        <Tab.Screen name="Apps" component={gameLibrary}></Tab.Screen>
        <Tab.Screen name="Profile" component={profile}></Tab.Screen>
    </Tab.Navigator>
)
export default stack;