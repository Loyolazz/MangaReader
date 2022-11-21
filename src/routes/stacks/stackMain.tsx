import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../screens/login";

//https://youtu.be/iVA7eXJNqeQ?t=213

const Stack = createNativeStackNavigator();

export default function StackMain(){
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}