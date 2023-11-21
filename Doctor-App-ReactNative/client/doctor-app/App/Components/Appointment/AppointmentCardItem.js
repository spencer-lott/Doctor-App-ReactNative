import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import moment from 'moment';
import { deleteAppointment, getAppointmentsByEmail } from '../../Services/GlobalAPI';
import Colors from '../../../assets/Shared/Colors'
import HorizontalLine from '../Shared/HorizontalLine'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';


export default function AppointmentCardItem({ appointment, setUserAppointments }) {
    const {isLoaded, isSignedIn, user} = useUser()

    const handleDelete = () => {
            Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed')
        },
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
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
                console.error("Error deleting appointment:", error);
            });
        }
      }
    ])  
    };
    
    const MAX_CHARACTERS_PER_LINE = 30; // Define the maximum characters per line

    // Splitting the note into chunks of maximum characters per line
    const splitNote = (note) => {
        const words = note.split(' ');
        const chunks = [];
        let currentLine = '';
    
        words.forEach((word) => {
            if ((currentLine + ' ' + word).length > MAX_CHARACTERS_PER_LINE) {
                chunks.push(currentLine.trim());
                currentLine = '';
            }
            currentLine += (currentLine ? ' ' : '') + word;
        });
    
        if (currentLine) {
            chunks.push(currentLine.trim());
        }
    
        return chunks;
    };
    // Usage in your component
    const noteChunks = splitNote(appointment.note);
    const addressNoteChunks = splitNote(appointment?.hospital?.address)

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
            <Image source={{uri: `${appointment?.hospital?.imageUrl}`}}
            style={{height: 100, width: 90, borderRadius: 10}}/>
            <View>
                <Text style={{fontSize: 20, fontFamily: 'appfont-semi'}}>{appointment?.hospital?.name}
                </Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
                    <Ionicons name="location" size={18} color={Colors.PRIMARY} />
                    <View>

                    {addressNoteChunks.map((chunk, index) => (
                        <Text key={index} style={{fontFamily: 'appfont', marginRight: 20}}>
                            {chunk}
                        </Text>
                    ))}
                    </View>
                </View>

                <View style={{ marginVertical: 10, marginLeft: 10 }}>
                    <View>
                        <Text style={{fontFamily: 'appfont-semi'}}>Reason For Visit:</Text>
                    </View>
                    {noteChunks.map((chunk, index) => (
                        <Text key={index} style={{ fontStyle: 'italic', marginLeft: 10, marginRight: 20, color: Colors.GRAY }}>
                            {chunk}
                        </Text>
                    ))}
                </View>

                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5}}>
                        <Ionicons name="document-text" size={18} color={Colors.PRIMARY} />
                        <Text style={{fontFamily: 'appfont', color: Colors.GRAY}}>Booking Id: #{appointment.id}</Text>
                    </View>
                    <View>

                    <TouchableOpacity onPress={() => console.log('***EDIT ME***')} style={{borderRadius: 10, marginLeft: 30, marginRight: 15}}>
                        <Text style={{color: Colors.white}}><Ionicons name="pencil" size={24} color={Colors.PRIMARY} /></Text>
                    </TouchableOpacity>
                    </View>

                    <View>

                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={{color: Colors.white}}><Ionicons name="trash" size={24} color="red" /></Text>
                    </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>

    </View>
  )
}
