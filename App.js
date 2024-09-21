import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import Colors from "./helperFile/colors";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import GameScreen from "./screens/GameScreen";
import Confirm from "./screens/Confirm";


export default function App() {
    const [user, setUser] = React.useState({name: "", email: "", phoneNumber: ""});
    const [gameVisible, setGameVisible] = React.useState(false);
    const handleStart = (name, email, phoneNumber) => {
        setUser({name: name, email: email, phoneNumber: phoneNumber});
        setGameVisible(true);
    }
    const handleRestart = () => {
        setUser({name: "", email: "", phoneNumber: ""});
        setGameVisible(false);
    }
    const handleNewGame = () => {
        setGameVisible(false);
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient}
                            style={styles.base}/>
            <StatusBar style="auto"/>
            <View>
                if (gameVisible) {
                <GameScreen user={user} handleRestart={handleRestart} handleNewGame={handleNewGame}/>
            } else {
                <StartScreen handleStart={handleStart}/>}
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
