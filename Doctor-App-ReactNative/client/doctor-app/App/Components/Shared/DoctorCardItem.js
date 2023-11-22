import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState } from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function DoctorCardItem({ doctor }) {

  return (
    <View style={{borderRadius: 10, marginBottom: 20}}>
      <View style={{padding: 10, backgroundColor: Colors.white, borderRadius: 10}}>

        <View style={{display: 'flex', flexDirection: 'row'}}>


          <View>
            <Image source={{uri:doctor.imageUrl}}
            style={{
              width: 100,
              height: 125,
              borderTop: 10,
              borderRadius: 10
            }} />
          </View>

          <View style={{display: 'flex', gap: 5, margin: 10, justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 18, fontFamily: 'appfont-semi'}}>Dr. {doctor.name}</Text>
            <Text style={{color: Colors.GRAY, fontFamily: 'appfont'}}>{doctor?.category?.name}</Text>

            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>⭐⭐⭐⭐⭐ </Text>
              <Text style={{color: Colors.GRAY, fontFamily: 'appfont'}}>| 49 Reviews</Text>
            </View>
          </View>

        </View>


        {/* <View>
          <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.SECONDARY, borderRadius: 10, marginTop: 10, padding: 10}}>
            <Text style={{color: Colors.PRIMARY, fontFamily: 'appfont'}}>Make Appointment</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  )
}