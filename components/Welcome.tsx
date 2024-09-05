import { Image, ScrollView, StyleSheet, Text } from "react-native"

const Welcome = () => {
    return (
        <ScrollView style={menuStyles.container}>
            <Text style={menuStyles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Image 
                style={menuStyles.image} 
                source={require("../assets/images/Picture1.png")} 
                resizeMode="cover"
                accessible={true}
                accessibilityLabel="Lemon logo"
            />
            <Image 
                style={menuStyles.image} 
                source={require("../assets/images/Picture2.png")} 
                resizeMode="cover"
                accessible={true}
                accessibilityLabel="Lemon logo"
            />
            <Image 
                style={menuStyles.image} 
                source={require("../assets/images/Picture3.png")} 
                resizeMode="cover"
                accessible={true}
                accessibilityLabel="Lemon logo"
            />
            <Image 
                style={menuStyles.image} 
                source={require("../assets/images/Picture4.png")} 
                resizeMode="cover"
                accessible={true}
                accessibilityLabel="Lemon logo"
            />
        </ScrollView>
    )
}

const menuStyles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#fff',
    },

    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Welcome