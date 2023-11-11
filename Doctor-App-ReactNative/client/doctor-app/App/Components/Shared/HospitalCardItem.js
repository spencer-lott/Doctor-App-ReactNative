import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function HospitalCardItem({hospital}) {

  return (
    <View style={{borderRadius: 10, marginBottom: 20}}>
      <Image source={{uri:hospital.imageUrl}}
      style={{
        width: '100%',
        height: 140,
        borderTop: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
      }} />

      <View style={{padding: 10, backgroundColor: Colors.white, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
        <Text style={{fontSize: 18, fontFamily: 'appfont-semi'}}>{hospital.name}</Text>

        <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Ionicons name="location" size={18} color={Colors.PRIMARY} />
            <Text>{hospital.address}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
        <Ionicons name="eye-sharp" size={18} color={Colors.PRIMARY} />            
        <Text>Views 658</Text>
        </View>



      </View>
        
    </View>
  )
}
