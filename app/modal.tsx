import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ModalScreen() {
    const { slug } = useLocalSearchParams();
    return (
        <View >
            <Text>Modal</Text>
        </View>
    );
}