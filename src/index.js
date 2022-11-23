import React from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./screens/homeScreen";
import FormScreen from "./screens/formScreen";
import DetailScreen from "./screens/detailScreen";

const Tab = createBottomTabNavigator();


const Index = () => {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home screen') {
                iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                } else if (route.name === 'form screen') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
                }else if(route.name === 'detail screen'){
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#3B185F',
            tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home screen" component={HomeScreen} />
            <Tab.Screen name="form screen" component={FormScreen} />
            <Tab.Screen name="detail screen" component={DetailScreen} />
        </Tab.Navigator>
    )
}

export default Index;
