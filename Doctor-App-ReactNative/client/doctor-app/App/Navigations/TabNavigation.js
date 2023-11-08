import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appointment from '../Screens/Appointment'
import Profile from '../Screens/Profile'
import { Ionicons, FontAwesome  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarIcon:({color, size}) => (
              <Ionicons name="ios-home" size={size} color={color} />
            )
          }}/>
        <Tab.Screen name='Appointment' component={Appointment}
          options={{
            tabBarIcon:({color, size}) => (
              <Ionicons name="ios-calendar" size={size} color={color} />
            )
          }}/>
        <Tab.Screen name='Profile' component={Profile}
          options={{
            tabBarIcon:({color, size}) => (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            )
          }}/>
    </Tab.Navigator>
  )
}