import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import { getAppointmentsByEmail } from '../Services/GlobalAPI'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem'

export default function Appointment() {
  const {isLoaded, isSignedIn, user} = useUser()
  const [userAppointments, setUserAppointments] = useState([])

  const getUserAppointments = () => {
    getAppointmentsByEmail(user.primaryEmailAddress.emailAddress).then((data) => setUserAppointments(data))
  }

  useEffect(() => {
    if(user.firstName){
      getUserAppointments()
    }
    console.log(userAppointments)
  }, [])


  return (
    <View style={{ padding: 20}}>
      <PageHeader title={'My Appointments'} backButton={false} />
      <FlatList 
        data={userAppointments}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AppointmentCardItem appointment={item}/>
        )}
      
      />    
      </View>
  )
}