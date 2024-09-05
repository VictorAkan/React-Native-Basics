import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

export default function DrawerScreen () {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen name="(tabs)" options={{title: 'Home'}} />
                <Drawer.Screen name="(menutabs)" options={{title: 'Menu'}} />
                <Drawer.Screen name="(logintabs)" options={{title: 'Login'}} />
                {/* <Drawer.Screen name="(tabs)/(home)" /> */}
                {/* <Drawer.Screen name="(tabs)/(home)/MenuItemsSections" /> */}
            </Drawer>
        </GestureHandlerRootView>
    )
}