import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import DoctorCardItem from '../Shared/DoctorCardItem'

export default function DoctorListBig({ doctorList }) {
  return (
    <View style={{marginTop: 15}}>
      <FlatList 
      data={doctorList}
      renderItem={({item}) => (
        <TouchableOpacity>
            <DoctorCardItem doctor={item} />
        </TouchableOpacity>
      )}
      />
    </View>
  )
}