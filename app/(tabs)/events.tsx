import React from 'react'
import { View, Text, Button, Pressable } from 'react-native'
import { YaMap, Marker } from 'react-native-yamap';
import MapView from 'react-native-maps';

const Events = () => {
    // YaMap.init("a28eed56-4e55-497b-8c02-44897278c8d2")
    return (
        <>
            <View className='flex'>
                <MapView className='w-full h-full'
                    initialRegion={{
                        latitude: 59.940168,
                        longitude: 30.326154,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
                <Pressable className='bg-blue-500 p-5 flex items-center justify-center absolute bottom-24 rounded-xl'>
                    <Text className='text-white'>Кнопка</Text>
                </Pressable>
            </View>

            {/* 
            
            <YaMap
                userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
                initialRegion={{
                    lat: 50,
                    lon: 50,
                    zoom: 10,
                    azimuth: 80,
                    tilt: 100
                }}
                style={{ flex: 1 }}
                className="w-screen h-screen"
            />
            */}
        </>


    )
}

export default Events