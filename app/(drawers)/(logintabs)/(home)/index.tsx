// import WelcomeScreen from "@/components/WelcomeScreen";
import LoginScreen from "./LoginScreen";
import { View } from "react-native";


export default function Home() {
    return (
        <View style={{flex: 1}}>
        <LoginScreen />
        </View>
    )
}