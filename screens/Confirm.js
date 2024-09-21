import React from "react";
import {Button, Modal, Text, View, StyleSheet} from "react-native";
import Colors from "../helperFile/colors";
import LinearGradientBackground from "../components/LinearGradientBackground";

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
