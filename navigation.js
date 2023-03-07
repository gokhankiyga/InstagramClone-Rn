import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import LoginScreen from './screens/LoginScreen'
const Stack = createStackNavigator()
const SignedInStack = () =>  (
 <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='SearchScreen' component={SearchScreen}/>
    </Stack.Navigator>
 </NavigationContainer>
  
)


export default SignedInStack