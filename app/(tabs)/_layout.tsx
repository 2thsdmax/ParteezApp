import React from "react";
import { Tabs } from "expo-router";
import { MapIcon, StarIcon, MagnifyingGlassIcon, RectangleStackIcon } from "react-native-heroicons/outline";
import { View, Text, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicicons from "@expo/vector-icons/Ionicons";


function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicicons>["name"];
    color: string;
}) {
    return <Ionicicons size={28} {...props} />;
}

export default function TabLayout() {
    // const { top } = useSafeAreaInsets();
    // console.log(top)
    return (
        <Tabs screenOptions={{
            headerTransparent: true,
            headerBackground: function () {
                return <BlurView intensity={90} tint="dark" className="h-24 top-0 left-0" />
            },
            headerTitleStyle: {
                color: "#ffffff"
            },
            tabBarStyle: {
                position: "absolute",
                height: 83,
                borderTopColor: "rgba(234, 234, 234, 0.3)",
            },
            tabBarLabelStyle: {
                fontSize: 13,
                fontWeight: "600",
            },
            tabBarBackground: function () {
                return <BlurView intensity={90} tint="dark" className=" h-24 bottom-0 left-0" />
            }
        }} >
            <Tabs.Screen name="today"
                options={{
                    title: "Сегодня",

                    header: function () {
                        return (
                            <>
                                <SafeAreaView></SafeAreaView>
                                <BlurView
                                    tint="dark"
                                    intensity={100}
                                    className='absolute top-0 left-0 right-0 h-12'
                                // style={{ height: top }}
                                />
                            </>
                        )
                    },

                    tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />
                    // function (tabProps) {
                    //     return (
                    //         <RectangleStackIcon
                    //             size={27}
                    //             color={tabProps.color}
                    //             // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    //             strokeWidth={1.5}
                    //         />
                    //     );
                    // },
                }}
            />
            <Tabs.Screen name="events"
                options={{
                    title: "Ивенты",
                    tabBarIcon: function (tabProps) {
                        return (
                            <MapIcon
                                size={27}
                                color={tabProps.color}
                                // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                                strokeWidth={1.5}
                            />
                        );
                    },
                    headerLeft: function () {
                        return (

                            <Text>Список</Text>
                        )
                    },
                }}
            />
            <Tabs.Screen name="favorite"
                options={{
                    title: "Избранное",
                    tabBarIcon: function (tabInfo) {
                        return (
                            <StarIcon
                                size={27}
                                color={tabInfo.color}
                                strokeWidth={1.5}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen name="search"
                options={{
                    title: "Поиск",
                    tabBarIcon: function (tabInfo) {
                        return (
                            <MagnifyingGlassIcon
                                size={27}
                                color={tabInfo.color}
                                strokeWidth={1.5}
                            />
                        );
                    },
                }}
            />


        </Tabs >
    )
}