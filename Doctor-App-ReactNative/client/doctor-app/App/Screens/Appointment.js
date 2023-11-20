import { View, Text, FlatList, Alert } from 'react-native'
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

  // useEffect(() => {

  //   })
  // }, [])



  // const deleteHandler = (index) => {
  //   Alert.alert('Delete', 'Are you sure you want to delete this item?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => {
  //         console.log('Cancel Pressed')
  //       },
  //       style: 'cancel'
  //     },
  //     {
  //       text: 'OK',
  //       onPress: () => {
  //         console.log('OK Pressed. Deleting index ', index)
  //         setPraiseList((prevState) => {
  //           console.log("State before:\n", prevState)
  //           const removed = prevState.splice(index, 1);
  //           console.log("State after:\n", prevState)
  //           return [...prevState]
  //         })
  //       }
  //     }
  //   ])

//   const handleDelete = () => {
//     deleteAppointment(appointment.id)
//     .then(data => setUserAppointments(data)).then(() => getAppointmentsByEmail(user.primaryEmailAddress.emailAddress))

// }

    // export const deleteAppointment = (id) => {
    //   return fetch(`${BASE_URL}/Appointment/${id}`, {
    //     method: "DELETE",
    //   })
    // };
  
  // }
  return (
    <View style={{ padding: 20}}>
      <PageHeader title={'My Appointments'} backButton={false} />
      <FlatList 
        data={userAppointments}
        // extraData={praiseList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AppointmentCardItem appointment={item} setUserAppointments={setUserAppointments}/>
        )}
      
      />    
      </View>
  )
}