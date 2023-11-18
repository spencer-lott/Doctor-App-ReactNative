import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import Hospitals from '../Components/Home/Hospitals';

export default function Home() {    
const { isLoaded, signOut } = useAuth();

  return (
    <ScrollView style={{padding: 20, marginTop: 25}}>
      <Header />

      {/* <SearchBar setSearchText={(value) => console.log(value)} /> */}

      <Slider />

      <Categories />

      <Hospitals />
    </ScrollView>
  )
}