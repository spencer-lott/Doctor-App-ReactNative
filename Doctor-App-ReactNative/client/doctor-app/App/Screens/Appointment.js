import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import PageHeader from '../Components/Shared/PageHeader'
import { getAppointmentsByEmail } from '../Services/GlobalAPI'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem'
import { useNavigation } from '@react-navigation/native'

export default function Appointment() {
  const navigation = useNavigation()
  const {isLoaded, isSignedIn, user} = useUser()
  const [userAppointments, setUserAppointments] = useState([])

  const getUserAppointments = () => {
    getAppointmentsByEmail(user.primaryEmailAddress.emailAddress).then((data) => setUserAppointments(data))
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
    if(user.firstName){
      getUserAppointments()
    }
  })

  }, [])
  
  return (
    <View style={{ padding: 20}}>
      <PageHeader title={'My Appointments'} backButton={false} />
      <FlatList 
        data={userAppointments}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AppointmentCardItem appointment={item} setUserAppointments={setUserAppointments} />
        )}
      
      />    
      </View>
  )
}

