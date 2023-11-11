import { View, Text, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig';
import { getAllHospitals, getDoctorsByCategoryName, getHospitalsByCategoryName } from '../Services/GlobalAPI';
import Colors from '../../assets/Shared/Colors';
import DoctorListBig from '../Components/HospitalDoctorsScreen/DoctorListBig';

export default function HospitalDoctorsListScreen() {
  const param = useRoute().params;
  const [activeTab, setActiveTab] = useState('Hospital')
  const [hospitalList, setHospitalList] = useState([])
  const [doctorList, setDoctorList] = useState([])  

  const getHospitalsByCategory = () => {
    getHospitalsByCategoryName(param?.categoryName).then((data) => setHospitalList(data))
  }
  useEffect(() => {
    getHospitalsByCategory()
  }, []);
  
  const getDoctorsByCategory = () => {
    getDoctorsByCategoryName(param?.categoryName).then((data) => setDoctorList(data))
  }

  useEffect(() => {
    getDoctorsByCategory()
  }, [])

  return (
    <View style={{padding: 20}}>
      <PageHeader title={param?.categoryName}/>

      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)}/>
      {/* If there are lots of hospitals there is a loader. Not really necessary for my purposes, but it is still cool */}
      {!hospitalList?.length ? <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
      :
      activeTab === 'Hospital'?
      <HospitalListBig hospitalList={hospitalList} />
      :
      <DoctorListBig doctorList={doctorList} />

      }


    </View>
  )
}

