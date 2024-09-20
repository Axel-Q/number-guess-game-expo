import React from "react";
import {StatusBar, View, Text, StyleSheet, TextInput} from "react-native";
import colors from "../helperFile/colors";

export default function StartScreen() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const handleNameChange = (text) => {
        const onlyLetters = text.replace(/[^A-Za-z]/g, "");
        setName(onlyLetters);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    };

    const checkNameValidity = (name) => {
        return name.length >= 2;
    };

    const checkEmailValidity = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const checkPhoneNumberValidity = (phoneNumber) => {
        const digits = phoneNumber.replace(/\D/g, "");
        if (digits.length !== 10) {
            return false;
        }
        const lastDigit = digits.charAt(digits.length - 1);
        return !(lastDigit === "0" || lastDigit === "1");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Name here"
                        value={name}
                        onChangeText={handleNameChange}
                        autoCorrect={false}
                    />
                    {name.length > 0 && !checkNameValidity(name) && (
                        <Text style={styles.errorText}>
                            Please enter a valid name (at least 2 letters, no numbers)
                        </Text>
                    )}
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Email here"
                        value={email}
                        onChangeText={handleEmailChange}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    {email.length > 0 && !checkEmailValidity(email) && (
                        <Text style={styles.errorText}>Please enter a valid email</Text>
                    )}
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Phone Num here"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                    />
                    {phoneNumber.length > 0 && !checkPhoneNumberValidity(phoneNumber) && (
                        <Text style={styles.errorText}>
                            Please enter a valid phone number (10 digits, last digit not 0 or
                            1)
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        backgroundColor: colors.gray,
        borderRadius: 15,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation for Android
        elevation: 15,
    },
    inputContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    input: {
        width: "80%",
        borderBottomColor: "purple",
        borderBottomWidth: 2,
        fontSize: 16,
    },
    errorText: {
        color: "red",
        marginTop: 5,
        fontSize: 14,
    },
});