import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function HospitalCardItem({hospital}) {

//I need the categories displayed for each hospital



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

//LOG  {"address": "2900 First Avenue Huntington, WV 25702", "category": {"iconUrl": "https://img.icons8.com/pastel-glyph/64/228BE6/lungs--v2.png", "id": 3, "name": "Pulmonologist"}, "hospital_Category": {"categoryId": 3, "hospitalId": 1, "id": 2}, "id": 1, "imageUrl": "https://www.st-marys.org/assets/Images/Content-Images/SMMC/exterior.jpg", "name": "St. Marys", "phone": "3045261234", "website": "https://www.st-marys.org"}

 //LOG  {"address": "1600 Medical Center Dr, Huntington, WV 25701", "category": {"iconUrl": "https://img.icons8.com/pastel-glyph/64/228BE6/lungs--v2.png", "id": 3, "name": "Pulmonologist"}, "hospital_Category": {"categoryId": 3, "hospitalId": 2, "id": 6}, "id": 2, "imageUrl": "https://cabellhuntington.org/assets/Images/Content-Images/CHH/About-CHH/CHH-campus-shot__ResizedImageWzYwMCwzMzRd.jpg", "name": "Cabell Huntington", "phone": "3045262000", "website": "https://cabellhuntington.org/"}