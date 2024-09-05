import { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView, Alert, Pressable } from "react-native";

export default function LoginScreen() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);

    return (
        <ScrollView style={styles.container} keyboardDismissMode="on-drag">
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            {!showConfirmation && (
                <>
                <Text style={styles.regularText}>Login to continue</Text>
                <TextInput clearButtonMode="always" onFocus={() => Alert.alert("Email is focused")} style={styles.input} value={email} onChangeText={onChangeEmail} placeholder='email' />
                <TextInput secureTextEntry={true} keyboardType="numeric" style={styles.input} value={password} onChangeText={onChangePassword} placeholder='password' />
                <Pressable onPress={() => setShowConfirmation(!showConfirmation)} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
                </>
            )}
            {showConfirmation && (
                <View>
                    <Text style={styles.headerText}>You are logged in!</Text>
                    <Pressable onPress={() => setShowConfirmation(!showConfirmation)} style={styles.button}>
                    <Text style={styles.buttonText}>Go back to Log in</Text>
                    </Pressable>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F4CE14',
        paddingVertical: 10,
        borderRadius: 35,
        margin: 'auto',
        paddingHorizontal: 60
    },
    buttonText: {
        fontSize: 26,
        textAlign: 'center',
    }
});