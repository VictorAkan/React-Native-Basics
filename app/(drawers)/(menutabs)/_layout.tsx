import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
    return (
        <>
        <Tabs
            screenOptions={{
                headerTitleStyle: { fontWeight: "bold" },
                tabBarActiveTintColor: '#F4CE14'
            }}
        >
            <Tabs.Screen name="(home)/index" options={{ 
                title: "Home",
                headerShown: false,
                tabBarIcon: ({color, focused}) => <FontAwesome size={28} name="home" color={color} />
            }} />
            <Tabs.Screen name="(home)/LoginScreen" options={{ 
                title: "Login",
                headerShown: false,
                tabBarIcon: ({color, focused}) => <FontAwesome size={28} name={focused ? 'user-circle-o' : 'user'} color={color} />
            }} />
            <Tabs.Screen
                name="(home)/MenuItemsSections"
                options={{ 
                    title: "Menu",
                    headerShown: false,
                tabBarIcon: ({color, focused}) => <FontAwesome size={28} name={focused ? 'list-alt' : 'bars'} color={color} />
                }}
            />
            {/* <Tabs.Screen name="(home)/WelcomeScreen" options={{title: 'Home'}} /> */}
            {/* <Tabs.Screen name="Settings" options={{title: 'Settings'}} /> */}
        </Tabs>
        </>
    );
}
