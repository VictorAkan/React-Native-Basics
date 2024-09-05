import { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    useColorScheme,
    useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";

const WelcomeScreen = () => {
    const [firstName, onChangeFirstName] = useState("");
    const [lastName, onChangeLastName] = useState("");
    const colorScheme = useColorScheme();

    const {height, width, fontScale} = useWindowDimensions();

    return (
        <ScrollView
            style={[
                styles.container,
                colorScheme === "dark"
                    ? { backgroundColor: "#333333" }
                    : { backgroundColor: "#fff"},
            ]}
            keyboardDismissMode="on-drag"
        >
            {/* <Text style={styles.headText}>Welcome to Little Lemon</Text> */}
            <View style={styles.headContainer}>
                <Image
                    source={require("../assets/images/littlelem.png")}
                    resizeMode="center"
                    style={styles.headImage}
                />
                <Text style={[styles.imageText, colorScheme === 'dark' ? {color: 'white'} : {color: 'black'}]}>Little Lemon</Text>
            </View>
            <Text style={[styles.bodyText, colorScheme === 'dark' ? {color: 'white'} : {color: 'black'}]}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
            {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={onChangeFirstName} />
            <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={onChangeLastName} />
            </KeyboardAvoidingView> */}
            {/* <Text>Window Dimensions</Text>
            <Text>Height: {height}</Text>
            <Text>Width: {width}</Text> */}

            <Link href="/LoginScreen">Go to Login</Link>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
    },
    headText: {
        textAlign: "center",
        color: "white",
        fontSize: 35,
        padding: 20,
    },
    bodyText: {
        textAlign: "center",
        fontSize: 25,
        color: "white",
        marginTop: 10,
        padding: 20,
        marginBottom: 20,
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    headContainer: {
        flexDirection: "row",
        // padding: 20,
        // paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    headImage: {
        width: 100,
        height: 100,
    },
    imageText: {
        color: "white",
        fontSize: 30,
        marginLeft: 10,
    },
});

export default WelcomeScreen;
