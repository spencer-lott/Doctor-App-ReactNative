import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import HospitalDetails from './HospitalDetails';
import BookAppointment from '../Screens/BookAppointment';
import AppointmentEdit from '../Components/Appointment/AppointmentEdit';

// These screens are all part of the home tab
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='hospital-doctor-list-screen' component={HospitalDoctorsListScreen} />
        <Stack.Screen name='hospital-detail' component={HospitalDetails} /> 
        <Stack.Screen name='book-appointment' component={BookAppointment}/>
        <Stack.Screen name='edit-appointment' component={AppointmentEdit} />
    </Stack.Navigator>
  )
}