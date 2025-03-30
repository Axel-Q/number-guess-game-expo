/**
 * Confirm.js
 *
 * This file contains the Confirm component, which serves as a confirmation
 * screen for the user to verify the information they've entered before
 * proceeding to the game. It displays the user's name, email, and phone number,
 * and provides options to go back and edit the information or continue to the game.
 *
 * Features:
 * - Displays user-entered information for confirmation.
 * - Provides buttons to navigate back to the start screen or proceed to the game.
 * - Utilizes a modal to overlay the confirmation screen.
 * - Applies consistent styling and a linear gradient background.
 *
 * @format
 * @flow
 */


import React from "react";
import {Button, Modal, Text, View, StyleSheet} from "react-native";
import Colors from "../helperFile/colors";
import LinearGradientBackground from "../components/LinearGradientBackground";


/**
 * Confirm component: Displays a confirmation screen with user information.
 * @param {object} props - Component props.
 * @param {string} props.name - User's name.
 * @param {string} props.email - User's email.
 * @param {string} props.phoneNumber - User's phone number.
 * @param {function} props.handleBackToStart - Function to navigate back to the start screen.
 * @param {function} props.handleJumpToGame - Function to proceed to the game screen.
 * @returns {JSX.Element} The rendered component.
 */
export default function Confirm({name, email, phoneNumber, handleBackToStart, handleJumpToGame}) {
    return (

        <Modal animationType="slide" transparent={true}>
            <LinearGradientBackground>
                <View style={styles.base}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>Hello {name}</Text>
                        <Text style={styles.info}>Here is the information that you entered:</Text>
                        <Text style={styles.info}>{email}</Text>
                        <Text style={styles.info}>{phoneNumber}</Text>
                        <Text style={styles.info}>
                            If it is not correct, please go back and edit them.
                        </Text>
                        <View style={styles.buttonContainer}>
                            <Button title="GO BACK"
                                    onPress={handleBackToStart}
                                    color={Colors.primary}
                            />
                            <Button title="CONTINUE" onPress={handleJumpToGame}
                            />
                        </View>
                    </View>

                </View>
            </LinearGradientBackground>
        </Modal>

    )
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        padding: 10,
        backgroundColor: Colors.blueGreen,
        borderRadius: 10,
    },
    info: {
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});
