import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import moment from 'moment'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import { useAssets } from 'expo-asset';

const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


export default function TodayScreen() {
    // const x = useBottomTabBarHeight()
    const date = moment().format("dddd, MMMM D")
    const dummyArray = [
        { id: '1', value: 'A' },
        { id: '2', value: 'B' },
        { id: '3', value: 'C' },
        { id: '4', value: 'D' },
        { id: '5', value: 'E' },
    ];

    return (
        <FlatList
            className='bg-black'
            ListHeaderComponent={function () {
                return (
                    <>
                        <SafeAreaView className='px-5'>
                            <Text className='mt-5 uppercase text-white/50 font-semibold'>{date}</Text>
                            <Text className='mt-2 text-white font-bold text-4xl'>Today</Text>
                        </SafeAreaView>
                    </>

                )
            }}
            ItemSeparatorComponent={() => (
                <View className='h-5' />
            )}
            data={dummyArray}
            keyExtractor={(v, i) => `item_${i}`}
            renderItem={function ({ item }) {
                return (
                    <View className='px-5 border border-red-500'>
                        <Link
                            // href='/modal'
                            // href={`/event/${item.id}`}
                            href={{ pathname: "/event/[id]", params: { id: item.id } }}
                            asChild
                        >
                            <Pressable className=' bg-white rounded-xl w-full overflow-hidden flex-grow relative'>
                                <Image
                                    className='w-full min-h-[400px] border-white'
                                    // style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
                                    // source={{ uri: "https://imgproxy.ra.co/_/quality:66/w:1500/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYzEwNGZjNWUzOWY5YmIzNjNiOWY4NDZiM2NhMTc4YWYzNDExOWI0My5wbmc=" }}
                                    source={require('../../assets/images/test-cover.png')}
                                    placeholder={blurhash}
                                    contentFit="fill"
                                    transition={1000}

                                />
                                <BlurView className='absolute bottom-0 left-0 w-full h-16 px-2 flex flex-col justify-center' >
                                    <Text className='text-white font-medium text-xl'>БОЛЬШОЙ РЕЙВ</Text>
                                    <Text className='text-white/60'>Описание</Text>
                                </BlurView>
                            </Pressable>
                        </Link>
                    </View>
                )
            }}
        >
        </FlatList>
    )
}