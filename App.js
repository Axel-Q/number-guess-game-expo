import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import Colors from "./helperFile/colors";
import React from "react";
import GameScreen from "./screens/GameScreen";
import Confirm from "./screens/Confirm";
import LinearGradientBackground from "./components/LinearGradientBackground";


export default function App() {
    const [user, setUser] = React.useState({name: "", email: "", phoneNumber: "", notRobot: false});
    const [confirmVisible, setConfirmVisible] = React.useState(false);
    const [gameVisible, setGameVisible] = React.useState(false);
    const handleStart = (name, email, phoneNumber) => {
        setUser({name: name, email: email, phoneNumber: phoneNumber, notRobot: true});
        setConfirmVisible(true);
    }
    const onRestart = () => {
        setUser({name: "", email: "", phoneNumber: "", notRobot: false});
        setConfirmVisible(false);
        setGameVisible(false);
    }


    return (

        <LinearGradientBackground>
            <View >
                {!gameVisible && (
                    <StartScreen handleStart={handleStart} user={user}/>
                )}
                {confirmVisible && !gameVisible && (
                    <Confirm
                        name={user.name}
                        email={user.email}
                        phoneNumber={user.phoneNumber}
                        handleBackToStart={() => {
                            setConfirmVisible(false)
                        }}
                        handleJumpToGame={() => {
                            setConfirmVisible(false);
                            setGameVisible(true);
                        }}
                    />
                )}
                {gameVisible && (
                    <GameScreen onRestart={onRestart} phoneNumber={user.phoneNumber}/>
                )}
            </View>
        </LinearGradientBackground>
    )
        ;
}



