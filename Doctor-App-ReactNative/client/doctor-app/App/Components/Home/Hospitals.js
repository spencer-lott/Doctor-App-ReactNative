import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import { getAllHospitals } from '../../Services/GlobalAPI'
import HospitalItem from './HospitalItem'

export default function Hospitals() {
    const [hospitals, setHospitals] = useState([])

    const getHospitals = () => {
        getAllHospitals().then((allHospitals) => setHospitals(allHospitals))
    }

    useEffect(() => {
        getHospitals()
    })

    if (!hospitals){
        return null
    }

  return hospitals&&(
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
  )
}