/**
 * App.js
 *
 * This is the main entry point of your React Native application.
 * It manages the overall flow of the app, including navigation between
 * the start screen, confirmation screen, and game screen.
 *
 * Features:
 * - Manages user state (name, email, phone number, and notRobot flag).
 * - Handles navigation between different screens based on user interactions.
 * - Provides a restart functionality to reset the app state.
 *
 * @format
 * @flow
 */

import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import Colors from "./helperFile/colors";
import React from "react";
import GameScreen from "./screens/GameScreen";
import Confirm from "./screens/Confirm";
import LinearGradientBackground from "./components/LinearGradientBackground";

/**
 * The main App component that manages the overall state and navigation of the application.
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
    const [user, setUser] = React.useState({name: "", email: "", phoneNumber: "", notRobot: false});
    const [confirmVisible, setConfirmVisible] = React.useState(false);
    const [gameVisible, setGameVisible] = React.useState(false);
    /**
     * Handles the start action from the StartScreen.
     * Updates the user state and shows the confirmation screen.
     * @param {string} name - User's name.
     * @param {string} email - User's email.
     * @param {string} phoneNumber - User's phone number.
     */
    const handleStart = (name, email, phoneNumber) => {
        setUser({name: name, email: email, phoneNumber: phoneNumber, notRobot: true});
        setConfirmVisible(true);
    }

    /**
     * Resets the application state to restart the game.
     */
    const onRestart = () => {
        setUser({name: "", email: "", phoneNumber: "", notRobot: false});
        setConfirmVisible(false);
        setGameVisible(false);
    }

// Main render of the App component
    return (

        <LinearGradientBackground>
            <View>
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



