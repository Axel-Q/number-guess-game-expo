import React from "react";
import {StatusBar, View, Text, StyleSheet} from "react-native";
import NameTextInputs from "../components/NameTextInputs";
import EmailTextInputs from "../components/EmailTextInputs";

export default function StartScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.card}>
                <Text>Name</Text>
                <NameTextInputs/>
                <Text>Email Address</Text>
                <EmailTextInputs/>
                <Text>Phone Number</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(128, 128, 128,1)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '60%',
        borderRadius: 15,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Elevation for Android
        elevation: 15,
    },
    card: {
        width: '80%',
    },
});