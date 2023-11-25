import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

// Not actually implemented, but could be at a future time
export default function SearchBar({setSearchText}) {
  const [searchInput, setSearchInput] = useState()
  return (
    <View style={{marginTop :15}}>
      <View style={{
        display: 'flex', 
        flexDirection: 'row', 
        gap: 5,
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: Colors.GRAY,
        padding: 10,
        borderRadius: 8
        }}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput 
          placeholder='Search' 
          onChangeText={(value) => setSearchInput(value)}
          onSubmitEditing={() => setSearchText(searchInput)}
          style={{width: '100%', fontFamily: 'appfont'}}/>

      </View>
    </View>
  )
}