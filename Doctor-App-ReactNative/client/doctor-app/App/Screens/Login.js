import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, LogBox } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'

LogBox.ignoreAllLogs()

export default function Login() {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{
        backgroundColor:Colors.white,
        padding:40,
        alignItems: 'center'
        }}>
      <Text style={styles.heading}>Huntington</Text>
      <Text style={styles.heading}>Tri-State Hospitals</Text>
      <Image source={{uri:'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_552/MTc2Mjk4NjA2Mzg1NTA1NDUz/4-mystical-depictions-of-snakes-in-hinduism.webp'}}
      style={{width: 400,
      height: 500}}/>
      <Text style={{textAlign: 'center', marginTop: 20}}>Book an Appointment Effortlessly and manage your health journey</Text>
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