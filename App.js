import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import Colors from "./helperFile/colors";
import React from "react";
import GameScreen from "./screens/GameScreen";
import Confirm from "./screens/Confirm";
import LinearGradientBackground from "./components/LinearGradientBackground";


export default function App() {
    const [user, setUser] = React.useState({name: "", email: "", phoneNumber: ""});
    const [confirmVisible, setConfirmVisible] = React.useState(false);
    const [gameVisible, setGameVisible] = React.useState(false);
    const handleStart = (name, email, phoneNumber) => {
        setUser({name: name, email: email, phoneNumber: phoneNumber});
        setConfirmVisible(true);
    }
    const onRestart = () => {
        setUser({name: "", email: "", phoneNumber: ""});
        setConfirmVisible(false);
        setGameVisible(false);
    }


    return (

        <LinearGradientBackground>
            <View>
                {!confirmVisible && !gameVisible && (
                    <StartScreen handleStart={handleStart} />
                )}
                {confirmVisible && !gameVisible && (
                    <Confirm
                        name={user.name}
                        email={user.email}
                        phoneNumber={user.phoneNumber}
                        handleBackToStart={() => setConfirmVisible(false)}
                        handleJumpToGame={() => {
                            setConfirmVisible(false);
                            setGameVisible(true);
                        }}
                    />
                )}
                {gameVisible && (
                    <GameScreen onRestart={onRestart} />
                )}
            </View>
        </LinearGradientBackground>


    )
        ;
}



