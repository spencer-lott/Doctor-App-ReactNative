import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import HospitalCardItem from '../Shared/HospitalCardItem'
import { useNavigation } from '@react-navigation/native'

export default function HospitalListBig({ hospitalList }) {
  const navigation = useNavigation()

  return (
    <View style={{marginTop: 15}}>
        <FlatList 
        data={hospitalList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('hospital-detail', 
          {
            singleHospital: item
          })}>
            <HospitalCardItem hospital={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}