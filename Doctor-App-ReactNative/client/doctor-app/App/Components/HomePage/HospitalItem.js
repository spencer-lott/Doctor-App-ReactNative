import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

// Contents of each hospital for the FlatList in Hospitals.js for the home screen
export default function HospitalItem({ hospital }) {
  return (
    <View style={{
        width: 200, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: Colors.LIGHT_GRAY, 
        marginRight: 10}}>

      <Image source={{uri:hospital.imageUrl}}
      style={{width: '100%',
      height: 110,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10 }}/>

      <View style={{padding: 7}}>
        <Text style={{fontFamily: 'appfont-semi', fontSize: 16}}>{hospital.name}</Text>
        <Text style={{color: Colors.GRAY}}>{hospital.address}</Text>
      </View>
      
    </View>
  )
}