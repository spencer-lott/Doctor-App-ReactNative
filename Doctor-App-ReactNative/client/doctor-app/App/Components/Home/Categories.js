import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getAllCategories } from '../../Services/GlobalAPI'
import Colors from '../../../assets/Shared/Colors'

export default function Categories() {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        getAllCategories().then((allCategories) => setCategories(allCategories))
    }

    useEffect(() => {
        getCategories()
    })

    if (!categories){
        return null
    }

  return (
    <View style={{marginTop: 10}}> 
        <View style={{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center'}}>
            <Text style={{
                fontSize: 20,
                fontFamily: 'appfont-semi'
            }}>Doctor Specialty</Text>
            <Text style={{
                fontFamily: 'appfont',
                color: Colors.PRIMARY
            }}>See All</Text>
        </View>

        <FlatList
            data={categories}
            numColumns={4}
            style={{marginTop: 5}}
            columnWrapperStyle={{
                flex: 1,
                justifyContent: 'space-between'
            }}
            renderItem={({item, index}) => index < 4 &&(
                <View style={{alignItems: 'center', marginBottom: 10}}> 
                    <View style={{
                        backgroundColor: Colors.SECONDARY,
                        padding: 15,
                        borderRadius: 99
                    }}>
                        <Image source={{uri:item.iconUrl}}
                            style={{
                                width: 30,
                                height: 30,
                                margin: 2
                            }}
                            />
                        </View>
                        <Text>{item.name}</Text>
                    </View>
                    )}
        />
</View>
    
  )
}