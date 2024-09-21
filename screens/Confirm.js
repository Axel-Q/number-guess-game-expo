import React from "react";
import {Button, Modal, Text, View} from "react-native";
import Colors from "../helperFile/colors";

const Confirm = (name, email, phoneNumber, handleBackToStart, handleJumpToGame) => {
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.base}>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>Hello {name}</Text>
                    <Text style={styles.info}>Here is the information that you entered:</Text>
                    <Text style={styles.info}>{email}</Text>
                    <Text style={styles.info}>{phoneNumber}</Text>
                    <Text style={styles.info}>
                        If it is not correct, please go back and edit them.
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title=title="GO BACK"
                            onPress={handleBackToStart}/>
                    <Button title="CONTINUE" onPress={handleJumpToGame}/>
                </View>
            </View>
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
        backgroundColor: Colors.red,
        borderRadius: 10,
        width: '80%',
        height: "60%",
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
