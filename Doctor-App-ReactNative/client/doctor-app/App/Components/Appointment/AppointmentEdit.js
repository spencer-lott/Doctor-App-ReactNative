import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../../assets/Shared/Colors';
import SubHeading from '../HomePage/SubHeading';
import { addAppointment, editAppointment, getAllAppointments, getAppointmentsByEmail } from '../../Services/GlobalAPI';
import { Ionicons } from '@expo/vector-icons';
import PageHeader from '../Shared/PageHeader';
import HorizontalLine from '../Shared/HorizontalLine';

export default function AppointmentEdit() {
  const navigation = useNavigation()
  const param = useRoute().params;
  const {isLoaded, isSignedIn, user} = useUser()
  const [next7Days, setNext7Days] = useState([])
  const [timeList, setTimeList] = useState([])
  
  const [selectedDate, setSelectedDate] = useState()
  const [selectedTime, setSelectedTime] = useState()
  const [notes, setNotes] = useState()

  const getDays = () => {
    const today = moment()
    const nextSevenDays = []
    for( let i = 1; i < 7; i++) // if you want it to show todays date to start, let i = 0
    {
        const date = moment().add(i, 'days')
        nextSevenDays.push({
            date: date,
            day: date.format('ddd'), // Tue or Mon
            formattedDate: date.format('Do MMM') // 4th OCT
        })
    }

    setNext7Days(nextSevenDays)
    // console.log(nextSevenDays)
}

const getTime = () => {
    const timeList = []
    for(let i = 8; i <= 12; i++)
    {
        timeList.push({
            time: i + ':00 AM'
        })
        timeList.push({
            time: i + ':30 AM'
        })
    }
    for(let i = 1; i <= 6; i++)
    {
        timeList.push({
            time: i + ':00 PM'
        })
        timeList.push({
            time: i + ':30 PM'
        })
    }

    // console.log(timeList)
    setTimeList(timeList)

}

useEffect(() => {
  getDays()
  getTime()
  console.log(param?.appointment?.hospital?.id)
  console.log(param)
}, [])

const handleSaveButtonClick = () => {

  console.log('***EDIT PRESSED***')
  const appointmentToSendToAPI = {
      Id: parseInt(param?.appointment?.id),
      Email: user.primaryEmailAddress.emailAddress,
      Date: selectedDate,
      HospitalId: parseInt(param?.appointment?.hospital?.id),
      Note: notes,
      Time: selectedTime,
      UserName: user.fullName

  }
  console.log(appointmentToSendToAPI)

  if(!selectedDate || !selectedTime || !notes){
    Alert.alert(
      'ERROR',
      'Please fill all fields before submitting',
      [
        {
          text: 'OK',
        },
      ],
      { cancelable: false }
      )
    } else {

    return editAppointment(appointmentToSendToAPI)
    
    .then(() => {
        Alert.alert(
            'Congratulations!',
            'You updated your appointment',
            [
                {
                    text: 'OK',
                },
            ],
            { cancelable: false }
        )
        navigation.navigate('Appointment')
        setNotes()
        setSelectedDate()
        setSelectedTime()  
    })

  }
}

return (
    <View>
      <View style={{ position: 'absolute', zIndex: 10, margin: 15 }}>
        <PageHeader style={{color: Colors.white}} title={'Edit Appointment'} backButton={false}/>
      </View >

        <Image source={{uri:param?.appointment?.hospital?.imageUrl}} 
        style={{width: '100%', height: 200, opacity: 0.75, borderTopLeftRadius: 10, borderTopRightRadius: 20}}/>


        <View style={{paddingLeft: 10}}>
          <Text style={{
            fontSize: 20, fontFamily: 'appfont-semi'
          }}>{param?.appointment?.hospital?.name}</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                <Text style={{
                  fontSize: 16, 
                  fontFamily: 'appfont', 
                  color: Colors.GRAY, 
                  marginTop: 10, 
                  width: '70%'
                  }}>{param?.appointment?.hospital?.address}</Text>
          </View>
        </View>
        <HorizontalLine />

        <View style={{paddingLeft: 10, marginTop: -10}}>
          <SubHeading subHeadingTitle={'Date'} seeAll={false}/>
        </View>
        <FlatList 
          data={next7Days}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
              <TouchableOpacity style={[styles.dayButton, selectedDate == item.date ? {backgroundColor: Colors.PRIMARY} : null]} 
              onPress={() => setSelectedDate(item.date)} >
                  <Text style={[{fontFamily: 'appfont', }, selectedDate == item.date ? {color: Colors.white} : null]}
                  >{item.day}</Text>
                  <Text style={[{fontFamily: 'appfont-semi', fontSize: 16}, selectedDate == item.date ? {color: Colors.white} : null]}>{item.formattedDate}</Text>

              </TouchableOpacity>
          )}
        />
        <View style={{paddingLeft: 10}}>
          <SubHeading subHeadingTitle={'Time'} seeAll={false}/>
        </View>

        <FlatList 
              data={timeList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                  <TouchableOpacity style={[styles.dayButton, {paddingVertical: 16}, selectedTime == item.time ? {backgroundColor: Colors.PRIMARY} : null]} 
                  onPress={() => setSelectedTime(item.time)} >
                      <Text style={[{fontFamily: 'appfont-semi', fontSize: 16}, selectedTime == item.time ? {color: Colors.white} : null]}>{item.time}</Text>

                  </TouchableOpacity>
              )}
          />

        <View style={{paddingLeft: 10}}>
          <SubHeading subHeadingTitle={'Note'} seeAll={false} />
        </View>

        <TextInput 
          numberOfLines={3}
          onChangeText={(value) => setNotes(value)}
          style={{backgroundColor: Colors.LIGHT_GRAY, padding: 10, paddingBottom: 40, borderRadius: 10, borderColor: Colors.SECONDARY, borderWidth: 1, textAlignVertical: 'top'}}
          placeholder='Write Notes Here'
        />

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* Cancel */}
          <TouchableOpacity onPress={() => navigation.goBack()}
            style={{
                paddingVertical: 13,
                paddingHorizontal: 50,
                backgroundColor: Colors.GRAY,
                margin: 10,
                borderRadius: 99,
                marginBottom: 10,
                zIndex: 20
            }}>
                <Text style={{
                color: Colors.white,
                textAlign: 'center',
                fontFamily: 'appfont-semi',
                fontSize: 17
                }}>Cancel</Text>
          </TouchableOpacity>

          {/* Save Changes */}
          <TouchableOpacity onPress={
            () => handleSaveButtonClick()
          }
            style={{
              paddingVertical: 13,
              paddingHorizontal: 20,
              backgroundColor: Colors.PRIMARY,
                margin: 10,
                borderRadius: 99,
                left: 0,
                right: 0,
                marginBottom: 10,
                zIndex: 20
            }}>
                <Text style={{
                color: Colors.white,
                textAlign: 'center',
                fontFamily: 'appfont-semi',
                fontSize: 17
                }}>Save Changes</Text>
          </TouchableOpacity>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
dayButton: {
  borderWidth: 1,
  borderRadius: 99,
  padding: 5,
  paddingHorizontal: 20,
  alignItems: 'center',
  marginRight: 10,
  marginTop: 10,
  borderColor: Colors.GRAY
}
})