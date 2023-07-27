import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React from 'react'

export default function SearchScreen() {
    return (
        <View className='bg-black min-h-screen'>
            <SafeAreaView>
                <Text className='text-white'>Search</Text>
            </SafeAreaView>
        </View>
    )
}