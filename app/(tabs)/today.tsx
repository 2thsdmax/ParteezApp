import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import moment from 'moment'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Today() {
    // const x = useBottomTabBarHeight()
    const date = moment().format("dddd, MMMM D")
    const dummyArray = [
        { id: '1', value: 'A' },
        { id: '2', value: 'B' },
        { id: '3', value: 'C' },
        { id: '4', value: 'D' },
        { id: '5', value: 'E' },
        { id: '6', value: 'F' },
        { id: '7', value: 'G' },
        { id: '8', value: 'H' },
        { id: '9', value: 'I' },
        { id: '10', value: 'J' },
        { id: '11', value: 'K' },
        { id: '12', value: 'L' },
        { id: '13', value: 'M' },
        { id: '14', value: 'N' },
        { id: '15', value: 'O' },
        { id: '16', value: 'P' },
        { id: '17', value: 'Q' },
        { id: '18', value: 'R' },
        { id: '19', value: 'S' },
        { id: '20', value: 'T' },
        { id: '21', value: 'U' },
        { id: '22', value: 'V' },
        { id: '23', value: 'W' },
        { id: '24', value: 'X' },
        { id: '25', value: 'Y' },
        { id: '26', value: 'Z' },
    ];

    return (
        <SafeAreaView className='flex-1'>
            <View className='bg-black px-5 min-h-screen'>
                <Text className='mt-5 uppercase text-white/50 font-semibold'>{date}</Text>
                <Text className='mt-2 text-white font-bold text-4xl'>Today</Text>
                {/* <Link href={{
                pathname: "/event",
                params: { id: 123 },
            }}>
            Open
        </Link> */}
                {/* <Link href="/event/1">Open 1</Link>
                <Link href="/event/2">Open 2</Link>
                <Link href="/event/3">Open 3</Link> */}
                <FlatList
                    className='pr-2'
                    data={dummyArray}
                    keyExtractor={(v, i) => `item_${i}`}
                    renderItem={function ({ item }) {
                        return (
                            <Link
                                href={`/event/${item.id}`}
                                className=' h-24 rounded-md bg-white/50 mt-5'
                            >
                                <View
                                >
                                    {/* {item.id} */}
                                    <Text>{item.id}</Text>
                                </View>
                            </Link>
                        )
                    }}
                >

                </FlatList>
            </View>
        </SafeAreaView>
    )
}