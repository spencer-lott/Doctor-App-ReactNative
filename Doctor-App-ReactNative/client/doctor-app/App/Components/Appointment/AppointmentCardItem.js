import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import HorizontalLine from '../Shared/HorizontalLine'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { deleteAppointment, getAllAppointments, getAppointmentsByEmail } from '../../Services/GlobalAPI';
import { useUser } from '@clerk/clerk-expo'


export default function AppointmentCardItem({ appointment, setUserAppointments }) {
    const {isLoaded, isSignedIn, user} = useUser()

    // const handleDelete = () => {
    //     deleteAppointment(appointment.id)
    //     .then(data => setUserAppointments(data)).then(() => getAppointmentsByEmail(user.primaryEmailAddress.emailAddress))

    // }

    const handleDelete = () => {
        deleteAppointment(appointment.id)
            .then(() => {
                // Retrieve updated appointments after deletion
                getAppointmentsByEmail(user.primaryEmailAddress.emailAddress)
                    .then(data => setUserAppointments(data))
                    .catch(error => {
                        // Handle error if needed
                        console.error("Error fetching appointments:", error);
                    });
            })
            .catch(error => {
                // Handle error if needed
                console.error("Error deleting appointment:", error);
            });
    };
    
    
  return (
    <View style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        backgroundColor: Colors.white, marginTop: 15 
        }}>
        <Text style={{fontSize: 16, fontFamily: 'appfont-semi', marginTop: 10}}>{moment(appointment.date).format('MMMM Do YYYY')} - {appointment.time}</Text>
        <HorizontalLine />
        <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image source={{uri:'https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0='}}
            style={{height: 100, width: 90, borderRadius: 10}}/>
            <View>
                <Text style={{fontSize: 16, fontFamily: 'appfont-semi'}}>{appointment?.hospital?.name}
                </Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                    <Text style={{fontFamily: 'appfont'}}>{appointment?.hospital?.address}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5}}>
                    <Ionicons name="document-text" size={18} color={Colors.PRIMARY} />
                    <Text style={{fontFamily: 'appfont', color: Colors.GRAY}}>Booking Id: #{appointment.id}</Text>
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={handleDelete} style={{backgroundColor: 'red', borderRadius: 10, padding: 5}}>
                    <Text style={{color: Colors.white}}>Delete</Text>
                </TouchableOpacity>
                </View>


            </View>
        </View>

    </View>
  )
}