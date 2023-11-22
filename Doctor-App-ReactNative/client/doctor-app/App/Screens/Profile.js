import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import Colors from '../../assets/Shared/Colors'
import PageHeader from '../Components/Shared/PageHeader'

export default function Profile() {
  const {isLoaded, signOut} = useAuth()
  const {user} = useUser()

  return (
    <View >
      <PageHeader title={'My Profile'}/>
      <View style={{display: 'flex', justifyContent: 'center',  marginTop: 180, alignItems: 'center'}}>

      <View style={{
        display: 'flex', 
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
      }}>
            <Image source={{uri:user.imageUrl}}
            style={{width: 200, height: 200, borderRadius: 99}}
            />
      </View>
      <View style={{backgroundColor: Colors.PRIMARY, borderRadius: 20, paddingHorizontal: 100, margin: 10}}>
        <Button title='Sign Out' 
        onPress={() => signOut()}
        color={Colors.white}      
        ></Button>
      </View>
        </View>

    </View>
  )
}