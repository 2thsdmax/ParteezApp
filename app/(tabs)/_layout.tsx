import { Tabs } from "expo-router";
import { HeartIcon, MagnifyingGlassIcon, RectangleStackIcon } from "react-native-heroicons/outline";
import { View, Text } from 'react-native'
import { BlurView } from 'expo-blur';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                position: "absolute"
            },
            tabBarBackground: () => <BlurView intensity={90} tint="dark" className="h-14" />
        }} >
            <Tabs.Screen name="today"
                options={{
                    title: "Today",
                    headerShown: false,
                    tabBarIcon: function (tabInfo) {
                        return (
                            <RectangleStackIcon
                                // size={24}
                                color={tabInfo.color}
                                // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                                className={"w-6 h-6"}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen name="favorite"
                options={{
                    title: "Favorite",
                    headerShown: false,
                    tabBarIcon: function (tabInfo) {
                        return (
                            <HeartIcon
                                // size={24}
                                color={tabInfo.color}
                                // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                                className={"w-6 h-6"}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen name="search"
                options={{
                    title: "Seach",
                    headerShown: false,
                    tabBarIcon: function (tabInfo) {
                        return (
                            <MagnifyingGlassIcon
                                // size={24}
                                color={tabInfo.color}
                                // color={tabInfo.focused ? "#006600" : "#8e8e93"}
                                className={"w-6 h-6"}
                            />
                        );
                    },
                }}
            />


        </Tabs >
    )
}