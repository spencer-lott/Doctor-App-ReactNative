import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentHospitalInfo from '../Components/BookAppointment/AppointmentHospitalInfo'
import ActionButton from '../Components/HospitalDetail/ActionButton'
import HorizontalLine from '../Components/Shared/HorizontalLine'
import BookingSection from '../Components/BookAppointment/BookingSection'

export default function BookAppointment() {
    const param = useRoute().params

  return (
    <ScrollView style={{padding: 20}}>
        <AppointmentHospitalInfo hospital={param.hospital}/>
        <ActionButton />
        <HorizontalLine />
        <BookingSection hospital={param.hospital}/>
    </ScrollView>
  )
}