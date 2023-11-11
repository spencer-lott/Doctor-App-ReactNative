import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function DoctorCardItem({ doctor }) {

  return (
    <View style={{borderRadius: 10, marginBottom: 20}}>
      <View style={{padding: 10, backgroundColor: Colors.white, borderRadius: 10}}>
      <Text style={{fontSize: 18, fontFamily: 'appfont-semi'}}>Dr. {doctor.name}</Text>
      {/* <Image source={{uri:doctor.imageUrl}}
      style={{
        width: 100,
        height: 125,
        borderTop: 10
      }} /> */}

      <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Text>{doctor?.category?.name}</Text>
      </View>
        </View>
    </View>
  )
}