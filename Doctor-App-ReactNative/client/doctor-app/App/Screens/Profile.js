import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Colors from '../../assets/Shared/Colors'
import PageHeader from '../Components/Shared/PageHeader'

export default function Profile() {
  const {isLoaded, signOut} = useAuth()
  return (
    <View >
      <PageHeader title={'My Profile'}/>

      <View style={{display: 'flex', justifyContent: 'center', backgroundColor: Colors.PRIMARY, borderRadius: 20, margin: 40, marginTop: 200}}>
        <Button title='Sign Out' 
        onPress={() => signOut()}
        color={Colors.white}      
        ></Button>
      </View>

    </View>
  )
}