import { View, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import HospitalItem from './HospitalItem'

// Shows the hospitals on the home screen
export default function Hospitals() {

const [isLoading, setLoading] = useState(true);
const [hospitals, setHospitals] = useState([]);

// I used this async function directly here because it worked better for some reason when fetching the imageUrls
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
          <SubHeading subHeadingTitle={'Hospitals'} seeAll={false}/>
          <FlatList 
              data={hospitals}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                  <HospitalItem hospital={item}/>
              )}
          />
      </View>
  )


}

