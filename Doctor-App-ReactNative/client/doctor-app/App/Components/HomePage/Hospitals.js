import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllHospitals } from '../../Services/GlobalAPI'
import { useNavigation } from '@react-navigation/native'
import SubHeading from './SubHeading'
import HospitalItem from './HospitalItem'

export default function Hospitals() {
    //KEEPING THIS OG CODE FOR NOW. THEY BOTH SEEM TO DO THE SAME THING FOR MY PURPOSES
//     const [hospitals, setHospitals] = useState([])
//     const navigation = useNavigation()

//     const getHospitals = () => {
//         getAllHospitals().then((allHospitals) => setHospitals(allHospitals))
//     }

//     useEffect(() => {
//         getHospitals()
//     })

//     if (!hospitals){
//         return null
//     }

//     return (
//       <View style={{marginTop: 10}}>
//           <SubHeading subHeadingTitle={'Hospitals'}/>
//           <FlatList 
//               data={hospitals}
//               horizontal={true}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({item, index}) => (
//                   <HospitalItem hospital={item}/>
//               )}
//           />
//       </View>
//   )

const [isLoading, setLoading] = useState(true);
const [hospitals, setHospitals] = useState([]);

const getHospitals = async () => {
  try {
    const response = await fetch('http://192.168.1.235:5236/api/Hospital');
    const json = await response.json();
    setHospitals(json);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getHospitals();
}, []);

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
  )


}

