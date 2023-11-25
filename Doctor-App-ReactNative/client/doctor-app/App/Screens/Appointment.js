import { View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '@clerk/clerk-expo'
import { getAppointmentsByEmail } from '../Services/GlobalAPI'
import AppointmentCardItem from '../Components/Appointment/AppointmentCardItem'
import PageHeader from '../Components/Shared/PageHeader'

export default function Appointment() {
  const navigation = useNavigation()
  const {user} = useUser()
  const [userAppointments, setUserAppointments] = useState([])

  const getUserAppointments = () => { // Get by email because it is unique
    getAppointmentsByEmail(user.primaryEmailAddress.emailAddress).then((data) => setUserAppointments(data))
  }

  // This focus addListener is crucial to my app. It rerenders the page when the user navigates to it. It makes it so that when an appointment is made or updated, state is updated, showing the new or updated appointments
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

