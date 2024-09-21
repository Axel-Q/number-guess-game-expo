import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import Colors from "./helperFile/colors";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

export default function App() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [startVisible, setStartVisible] = React.useState(true);
    const [confirmVisible, setConfirmVisible] = React.useState(false);
    const [gameVisible, setGameVisible] = React.useState(false);
    const [gameSupported, setGameSupported] = React.useState(false);

    const handleStart = (name, phoneNumber, email) => {
        setName(name);
        setEmail(email);
        setPhoneNumber(phoneNumber);
        setStartVisible(false);
        setConfirmVisible(true);
    }

    const handleBackToStart = () => {
        setStartVisible(true);
        setConfirmVisible(false);
    }

    const handleJumpToGame = () => {
        setConfirmVisible(false);
        setGameVisible(true);
        setGameSupported(true);
    }

    const handleRestartGame = () => {
        setName("");
        setEmail("");
        setGameVisible(false);
        setGameSupported(false);
        setConfirmVisible(false);
        setStartVisible(true);
    }


    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient}
                            style={styles.base}/>
            <StatusBar style="auto"/>
            <View>
                {!gameVisible && (<StartScreen onStart={handleStart} visible={startVisible}/>)}
            </View>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    base: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
