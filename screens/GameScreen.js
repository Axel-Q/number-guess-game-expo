import Colors from "../helperFile/colors";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Image,
    Keyboard,
    ScrollView,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import LinearGradientBackground from "../components/LinearGradientBackground";
import React, {useState, useEffect, useRef, useCallback} from "react";

const getRandomNum = () => {
    return Math.floor(Math.random() * 100) + 1;
};

export default function GameScreen({handleRestart}) {
    const [gameState, setGameState] = useState({
        targetNumber: getRandomNum(),
        userGuess: "",
        attemptsLeft: 4,
        timeLeft: 60,
        isGameOver: false,
        hasUsedHint: false,
        hintMessage: "",
        feedbackMessage: null,
    });
    const timerRef = useRef(null);






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