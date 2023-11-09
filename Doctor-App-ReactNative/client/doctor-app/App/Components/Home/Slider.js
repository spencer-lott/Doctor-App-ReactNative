import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllSliders } from '../../Services/GlobalAPI'

export default function Slider() {
    const [sliders, setSliders] = useState([])

    const getSliders = () => {
        getAllSliders().then((allSliders) => setSliders(allSliders))
      }
    
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
    </View>
  )
}

