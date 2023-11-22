import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native'
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
      
      <View >
        <TouchableOpacity onPress={() => signOut()}
        style={{backgroundColor: Colors.PRIMARY, borderRadius: 90, alignItems: 'center', margin: 10,     width: Dimensions.get('screen').width*0.8
      }}>
          <Text style={{fontSize: 17 ,color: Colors.white, paddingVertical: 16}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
        </View>

    </View>
  )
}