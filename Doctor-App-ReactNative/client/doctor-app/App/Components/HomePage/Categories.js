import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getAllCategories } from '../../Services/GlobalAPI'
import Colors from '../../../assets/Shared/Colors'
import SubHeading from './SubHeading'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
    const navigation = useNavigation()
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        getAllCategories().then((allCategories) => setCategories(allCategories))
    }

    useEffect(() => {
        getCategories()
    }, [])

    if (!categories){
        return null
    }

  return (
    <View style={{marginTop: 10}}> 
    <SubHeading subHeadingTitle={'Doctor Specialty'} seeAll={false}/>
        <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 5}}
            renderItem={({item, index}) => (
                <TouchableOpacity 
                onPress={() => navigation.navigate('hospital-doctor-list-screen', 
                {
                    categoryName: item.name
                })}
                style={{alignItems: 'center', marginBottom: 10, marginRight: 7}}> 
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
                    </TouchableOpacity>
                    )}
        />
</View>
  )
}