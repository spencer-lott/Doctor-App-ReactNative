import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen/HospitalDoctorTab'
import HospitalListBig from '../Components/HospitalDoctorsScreen/HospitalListBig'
import DoctorListBig from '../Components/HospitalDoctorsScreen/DoctorListBig'
import { getAllDoctors, getAllHospitals } from '../Services/GlobalAPI'
import Colors from '../../assets/Shared/Colors'

// Contents of the Explore tab showing all hospital or all doctors
export default function Explores() {
    const [activeTab, setActiveTab] = useState('Hospital')
    const [hospitalList, setHospitalList] = useState([])
    const [doctorList, setDoctorList] = useState([])  

    const getHospitals = () => {
        getAllHospitals().then((data) => setHospitalList(data))
      }
      useEffect(() => {
        getHospitals()
      }, []);
      
      const getDoctors = () => {
        getAllDoctors().then((data) => setDoctorList(data))
      }
    
      useEffect(() => {
        getDoctors()
      }, [])
        
  
  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 26, fontFamily: 'appfont-semi'}}>Explore</Text>
      <HospitalDoctorTab activeTab={(value) => setActiveTab(value)} />

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