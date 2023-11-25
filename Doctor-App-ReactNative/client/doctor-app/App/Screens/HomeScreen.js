import { ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/HomePage/Header';
import SearchBar from '../Components/HomePage/SearchBar';
import Slider from '../Components/HomePage/Slider';
import Categories from '../Components/HomePage/Categories';
import Hospitals from '../Components/HomePage/Hospitals';

export default function HomeScreen() {    

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