import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen3 from './Screens/Screen3'
import { NavigationContainer } from '@react-navigation/native'
import Screen4 from './Screens/Screen4'
import Screen5 from './Screens/Screen5'
import Screen6 from './Screens/Screen6'
import Top1 from './Screens/Top1'
import Top2 from './Screens/Top2'
import Top3 from './Screens/Top3'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Top = createMaterialTopTabNavigator()
const Tab = createBottomTabNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShadowVisible: false
        }}>
            <Drawer.Screen
                name='Tab + Stack Navigation'
                component={TabNavigator}
            />
            <Drawer.Screen
                name='Tab Navigation'
                component={TopNavigation}
            />
        </Drawer.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name='Home'
                component={StackNavigator1}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name='Screen 2'
                component={StackNavigator2}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Stack 1'
                component={Screen3}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Stack 2'
                component={Screen4}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function StackNavigator2() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Stack 3'
                component={Screen5}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Stack 4'
                component={Screen6}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

function TopNavigation() {
    return (
        <Top.Navigator>
            <Top.Screen
                name='Top 1'
                component={Top1}
            />
            <Top.Screen
                name='Top 2'
                component={Top2}
            />
            <Top.Screen
                name='Top 3'
                component={Top3}

            />
        </Top.Navigator>
    )
}


export default function Navigators() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}