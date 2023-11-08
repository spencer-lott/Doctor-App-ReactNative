import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllSliders } from '../../Services/GlobalAPI'

export default function Slider() {
    const [sliders, setSliders] = useState([])

    const getSliders = () => {
        getAllSliders().then((allSliders) => setSliders(allSliders))
      }
    
      //This is what is displaying all the sliders on the page
      useEffect(() => {
        getSliders()
      }, [])
    
  return (
    <View style={{marginTop: 10}}> 
        <FlatList 
            data={sliders}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <Image source={{uri:item.imageUrl}}
                    style={{
                        width: Dimensions.get('screen').width*0.9,
                        height: 170,
                        borderRadius: 10 ,
                        margin: 2
                    }}
                    />
                    )}
        />
        {/* This code below is not necessary
      <View>
        <Text>
          {sliders.map((slider) => (
            <Text key={slider.id}>{slider.id} {slider.name} {slider.imageUrl}</Text>
          ))}
        </Text>
      </View> */}
    </View>
  )
}

