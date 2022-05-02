import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {useEffect, useState} from 'react';
import betaNavigation from './betaNavigation';
import gameLibrary from './gameLibrary';
import profile from './profile';
import loginSelection from '../auth/loginSelection';
import signin from '../auth/signin';
import signup from '../auth/signup';
import chat from './chat';
import rapBattle from '../games/RapBattle/rapBattle';
import test1 from './test1';
import forgotPassword from '../auth/forgotPassword';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import confirmEmail from '../auth/confirmEmail';
import newPassword from '../auth/newPassword';
import {Auth, Hub} from 'aws-amplify';
import {View, ActivityIndicator} from 'react-native';
import rapLobby from '../games/RapBattle/rapLobby';
import lobby from './lobby';
import rapWait from '../games/RapBattle/rapWait';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const stack = () => {
    const [user, setUser] = useState(undefined);
    const checkUser= async () => {
        try{
            const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            setUser(authUser);
        } catch(e) {
            setUser(null);
        }
    }
    useEffect(() => {
        checkUser();
    }, []);
    
    useEffect(() => {
        const listener = (data) => {
            if(data.payload.event === 'signIn' || data.payload.event === 'signOut') {
                checkUser();
            }
        }
        Hub.listen('auth',listener);
        return () => Hub.remove('auth',listener);
    }, []);

    if (user === undefined) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator/>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="loginSelection">
                {user ? (
                    <>
                    <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                    <Stack.Screen name="betaNavigation" component={TabStack} options={{ headerShown: false}}/>
                    <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                    <Stack.Screen name="chat" component={chat} options={{ headerShown: true}} />
                    <Stack.Screen name="rapBattle" component={rapBattle} options={{ headerShown: false}} />
                    <Stack.Screen name="rapLobby" component={rapLobby} options={{ headerShown: false}} />
                    <Stack.Screen name="rapWait" component={rapWait} options={{ headerShown: false}} />
                    <Stack.Screen name="test1" component={test1} options={{ headerShown: true}} />
                    </>
                ): (
                    <>
                    <Stack.Screen name="loginSelection" component={loginSelection} options={{ headerShown: false}} />
                    <Stack.Screen name="signin" component={signin} options={{ headerShown: false}} />
                    <Stack.Screen name="signup" component={signup} options={{ headerShown: false}} />
                    <Stack.Screen name="forgotPassword" component={forgotPassword} options={{ headerShown: false}} />
                    <Stack.Screen name="confirmEmail" component={confirmEmail} options={{ headerShown: false}} />
                    <Stack.Screen name="newPassword" component={newPassword} option={{ headerShown: false}} />
                    <Stack.Screen name="library" component={gameLibrary} options={{ headerShown: false }} />
                    <Stack.Screen name="betaNavigation" component={TabStack} options={{ headerShown: false}}/>
                    <Stack.Screen name="profile" component={profile} options={{ headerShown: false}} />
                    <Stack.Screen name="chat" component={chat} options={{ headerShown: true}} />
                    <Stack.Screen name="rapBattle" component={rapBattle} options={{ headerShown: false}} />
                    <Stack.Screen name="test1" component={test1} options={{ headerShown: true}} />
                    <Stack.Screen name="rapLobby" component={rapLobby} options={{ headerShown: false}} />
                    <Stack.Screen name="lobby" component={lobby} options={{ headerShown: false}} />
                    <Stack.Screen name="rapWait" component={rapWait} options={{ headerShown: false}} />
                    </>
                )}
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