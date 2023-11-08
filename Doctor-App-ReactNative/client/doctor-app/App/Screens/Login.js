import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{
        backgroundColor:Colors.white,
        padding:40,
        alignItems: 'center'
        }}>
      <Text style={styles.heading}>Your Ultimate Doctor</Text>
      <Text style={styles.heading}>Appointment Booking App</Text>
      <Text style={{textAlign: 'center', marginTop: 20}}>Book Appointment Effortlessly and manage your health journey</Text>
      <SignInWithOAuth />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight: 'bold',
    }
})