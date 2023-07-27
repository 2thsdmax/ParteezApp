import { Stack, SplashScreen } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import { useEffect } from 'react';
// import { useFonts } from "expo-font";

export default function RootLayout() {
    return (
        <Stack screenOptions={{
            // contentStyle: {
            //     backgroundColor: '#000000'
            // },
        }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
    )
}

// export default function RootLayout() {
//     const [loaded, error] = useFonts({
//         // SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//         ...Ionicons.font,
//     });

//     // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//     useEffect(() => {
//         if (!loaded) {
//             SplashScreen.preventAutoHideAsync();
//         } else {
//             SplashScreen.hideAsync();
//         }
//         if (error) throw error;
//     }, [error, loaded]);
//     return (
//         <>{
//             loaded && (
//                 <Stack screenOptions={{
//                     // contentStyle: {
//                     //     backgroundColor: '#000000'
//                     // },
//                 }}>
//                     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//                     <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//                 </Stack>
//             )
//         }</>
//     );
// }
