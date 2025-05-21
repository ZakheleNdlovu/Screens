import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home2 from './Home2'
import { NavigationContainer } from '@react-navigation/native'
import Details from './Details'


const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function DrawerNa() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Drawer.Screen
                name='Form'
                component={StackNav}
            />
        </Drawer.Navigator>
    )
}

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Register'
                component={Home2}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Details'
                component={Details}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function Register() {
    return (
        <NavigationContainer>
            <DrawerNa />
        </NavigationContainer>
    )
}