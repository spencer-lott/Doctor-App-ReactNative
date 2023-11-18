import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllHospitals } from '../../Services/GlobalAPI'
import { useNavigation } from '@react-navigation/native'
import SubHeading from './SubHeading'
import HospitalItem from './HospitalItem'

export default function Hospitals() {
    const [hospitals, setHospitals] = useState([])
    const navigation = useNavigation()

    const getHospitals = () => {
        getAllHospitals().then((allHospitals) => setHospitals(allHospitals))
    }

    useEffect(() => {
        getHospitals()

    })

    if (!hospitals){
        return null
    }

    return (
      <View style={{marginTop: 10}}>
          <SubHeading subHeadingTitle={'Hospitals'}/>
          <FlatList 
              data={hospitals}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                  <HospitalItem hospital={item}/>
              )}
          />
      </View>
  )}

