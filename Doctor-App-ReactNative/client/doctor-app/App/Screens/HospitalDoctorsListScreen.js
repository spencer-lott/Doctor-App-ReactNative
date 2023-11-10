import { View, Text, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import { getAllHospitals, getHospitalsByCategoryName } from '../Services/GlobalAPI';
import Colors from '../../assets/Shared/Colors';

export default function HospitalDoctorsListScreen() {
  // const route = useRoute() //good for console.logging the route
  const param = useRoute().params;
  const [hospitalList, setHospitalList] = useState([])
//-----------------------------
//   const [allHospitals, setAllHospitals] = useState([])
//   const getHospitals = () => {
//     getAllHospitals().then((data) => setAllHospitals(data))
// }
//   useEffect(() => {
//       getHospitals()
//   })
//---------------------------
  const getHospitalsByCategory = () => {
    getHospitalsByCategoryName(param?.categoryName).then((data) => setHospitalList(data))
  }
  useEffect(() => {
    getHospitalsByCategory()
  }, []);
  

  return (
    <View style={{padding: 20}}>
      <PageHeader title={param?.categoryName}/>

      <HospitalDoctorTab />
      {/* If there are lots of hospitals there is a loader. Not really necessary for my purposes, but it is still cool */}
      {!hospitalList?.length ? <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
      :
      <HospitalListBig hospitalList={hospitalList} />
      }

    </View>
  )
}

