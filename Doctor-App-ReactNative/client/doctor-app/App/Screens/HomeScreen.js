import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/HomePage/Header';
import SearchBar from '../Components/HomePage/SearchBar';
import Slider from '../Components/HomePage/Slider';
import Categories from '../Components/HomePage/Categories';
import Hospitals from '../Components/HomePage/Hospitals';

export default function HomeScreen() {    
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