import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function EventDetails() {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Stack.Screen options={{ headerTitle: `Event №${id}` }} />
            <Text>{`Details for event ${id}`}</Text>
        </View>
    )
}