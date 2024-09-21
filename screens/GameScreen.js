import Colors from "../helperFile/colors";
import React from "react";
import {Button, View} from "react-native";

export default function GameScreen ({user, handleRestart, handleNewGame}) {
    return (
        <View style={styles.base}>
            <View style={styles.infoContainer}>
                <Text style={styles.info}>Hello {user.name}</Text>
                <Text style={styles.info}>You are playing the game now.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="RESTART" onPress={handleRestart}/>
                <Button title="NEW GAME" onPress={handleNewGame}/>
            </View>
        </View>
    )
}