import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
import ActionButton from './ActionButton';
import SubHeading from '../HomePage/SubHeading';
import HorizontalLine from '../Shared/HorizontalLine';

export default function HospitalInfo({ hDetail }) {
  return (
    <View >
        <Text style={{fontSize: 23, fontFamily: 'appfont-semi'}}>{hDetail?.name}</Text>

        <HorizontalLine />
        <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                <Text style={{fontSize: 16, fontFamily: 'appfont', color: Colors.GRAY, marginTop: 10}}>{hDetail?.address}</Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 6}}>
        <Ionicons name="time" size={22} color={Colors.PRIMARY} />        
        <Text style={{
            fontSize: 18,
            fontFamily: 'appfont',
            color: Colors.GRAY
        }}>Mon Sun | 11AM - 8PM</Text>
        </View>

        <ActionButton />

        <View style={{ borderBottomWidth: 1, borderColor: Colors.LIGHT_GRAY, margin: 5, marginBottom: 15, marginTop: 15}}>
        </View>

        <SubHeading subHeadingTitle={'About'} seeAll={false}/>
        <Text>{hDetail.description}</Text>
    </View>

  )
}