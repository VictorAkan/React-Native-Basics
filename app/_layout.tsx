import { Stack } from "expo-router";

export default function Home() {
    return (
        <Stack>
            <Stack.Screen name="(drawers)" options={{headerShown: false}} />
            {/* <Stack.Screen name="(tabs)" options={{headerShown: false}} /> */}
        </Stack>
    )
}