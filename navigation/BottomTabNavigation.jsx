import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, Location, Chat, Successful, Failed } from '../screens';
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import TopTap from './TopTap';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    posiion: 'absolute',
    bottom: 20,
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeScreen'
        activeColor = '#EB6458'
        tabBarHideKeyBoard = {true}
        headerShown = {false}
        inactiveColor = '#3e2465'
        barStyle = {{paddingBottom: 48}}
    >
        <Tab.Screen
        name='Home' component = {HomeScreen} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={"grid"}
                    color={focused ? COLORS.red : COLORS.gray}
                    size = {26}
                />
            )
        }}/>

        <Tab.Screen
        name='Location' component = {Location} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={"location"}
                    color={focused ? COLORS.red : COLORS.gray}
                    size = {26}
                />
            )
        }}/>

        <Tab.Screen
        name='Chat' component = {Successful} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={"chatbubble-ellipses"}
                    color={focused ? COLORS.red : COLORS.gray}
                    size = {26}
                />
            )
        }}
        />

        <Tab.Screen
        name='Profile' component = {TopTap} options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={"person"}
                    color={focused ? COLORS.red : COLORS.gray}
                    size = {26}
                />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation