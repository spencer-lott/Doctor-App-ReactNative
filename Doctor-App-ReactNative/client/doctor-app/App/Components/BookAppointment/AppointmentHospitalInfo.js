import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors'
import PageHeader from '../Shared/PageHeader'
import HorizontalLine from '../Shared/HorizontalLine';

export default function AppointmentHospitalInfo({ hospital }) {

  return (
    <View>
      <PageHeader title={'Book Appointment'}/>
      <View style={{marginTop: 10, display: 'flex', flexDirection: 'row', gap: 15, alignItems: 'center'}}>
        <Image source={{uri:hospital.imageUrl}} 
        style={{width: 100, height: 100, borderRadius: 99}}/>
        <View>
          <Text style={{
            fontSize: 20, fontFamily: 'appfont-semi', marginBottom: 8
          }}>{hospital.name}</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                <Text style={{
                  fontSize: 16, 
                  fontFamily: 'appfont', 
                  color: Colors.GRAY, 
                  marginTop: 10, 
                  width: '70%'
                  }}>{hospital.address}</Text>
          </View>
        </View>

      </View>
        <HorizontalLine />
    </View>
  )
}