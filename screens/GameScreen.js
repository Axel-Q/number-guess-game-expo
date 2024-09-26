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
    Platform, Button
} from "react-native";
import LinearGradientBackground from "../components/LinearGradientBackground";
import React, {useState, useEffect, useRef, useCallback} from "react";

/**
 * Generates an array of multiples of the last digit of the phone number between 1 and 100.
 * @param {string|number} phoneNumber - The user's phone number.
 * @returns {number[]} An array of multiples.
 */
const getMultiplesArray = (phoneNumber) => {
    const lastDigit = parseInt(phoneNumber.toString().slice(-1), 10);
    console.log('lastDigit', lastDigit);
    const multiples = [];
    for (let i = lastDigit; i <= 100; i += lastDigit) {
        multiples.push(i);
    }
    console.log('multiples', multiples);
    return multiples;
};


/**
 * Selects a random number from the array of multiples.
 * @param {number[]} multiplesArray - Array of multiples.
 * @returns {number} A random number from the multiples array.
 */
const getRandomNum = (multiplesArray) => {
    const randomIndex = Math.floor(Math.random() * multiplesArray.length);
        console.log("tagretNumber", multiplesArray[randomIndex]);
    return multiplesArray[randomIndex];

};

/**
 * GameScreen component: A number guessing game where the user tries to guess a number
 * that is a multiple of the last digit of their phone number between 1 and 100.
 * @param {object} props - Component props.
 * @param {function} props.onRestart - Function to restart the game.
 * @param {string|number} props.phoneNumber - The user's phone number.
 * @returns {JSX.Element} The rendered component.
 */
export default function GameScreen({onRestart, phoneNumber}) {
    const [gameState, setGameState] = useState({
        targetNumber: null,
        userGuess: "",
        attemptsLeft: 4,
        timeLeft: 60,
        isGameOver: false,
        hasUsedHint: false,
        hintMessage: "",
        feedbackMessage: null,
        guessResultDisplay: false,
        hasGameStarted: false,
    });
    const timerRef = useRef(null);

       /**
     * useEffect hook to handle the timer countdown.
     * The timer starts when the game starts and stops when the game is over.
     */
    useEffect(() => {
        if (!gameState.isGameOver && gameState.hasGameStarted) {
            timerRef.current = setInterval(() => {
                setGameState((prevState) => {
                    if (prevState.timeLeft <= 1) {
                        clearInterval(timerRef.current);
                        return {
                            ...prevState,
                            timeLeft: 0,
                            isGameOver: true,
                            feedbackMessage: "You ran out of time.",
                        };
                    }
                    return {
                        ...prevState,
                        timeLeft: prevState.timeLeft - 1,
                    };
                });
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [gameState.isGameOver, gameState.hasGameStarted]);
    const handleHint = useCallback(() => {
        if (gameState.hasUsedHint) return;
        const hint =
            gameState.targetNumber >= 0 && gameState.targetNumber <= 25
                ? "The number is between 0 and 25."
                : gameState.targetNumber >= 26 && gameState.targetNumber <= 50
                    ? "The number is between 26 and 50."
                    : gameState.targetNumber >= 51 && gameState.targetNumber <= 75
                        ? "The number is between 51 and 75."
                        : "The number is between 76 and 100.";
        setGameState((prevState) => ({
            ...prevState,
            hasUsedHint: true,
            hintMessage: hint,
        }));
    }, [gameState.hasUsedHint, gameState.targetNumber]);
    const handleInputChange = (text) => {
        setGameState((prevState) => ({
            ...prevState,
            userGuess: text,
        }));
    };
    const handleEndGame = () => {
        setGameState((prevState) => ({
            ...prevState,
            feedbackMessage: "You chose to end the game.",
            isGameOver: true,
        }));
    };
    const handleNewGame = () => {
        const multiplesArray = getMultiplesArray(phoneNumber);
        const newNumber = getRandomNum(multiplesArray);
        setGameState({
            targetNumber: newNumber,
            userGuess: "",
            attemptsLeft: 4,
            timeLeft: 60,
            isGameOver: false,
            hasUsedHint: false,
            hintMessage: "",
            feedbackMessage: null,
            hasGameStarted: true,
        });
    };
    const handleGuess = () => {
        const guess = parseInt(gameState.userGuess, 10);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            Alert.alert("Invalid Number", "Please enter a valid number between 1 and 100.");
            return;
        }

        if (guess === gameState.targetNumber) {
            clearInterval(timerRef.current);
            setGameState((prevState) => ({
                ...prevState,
                isGameOver: true,
                feedbackMessage: "You guessed correctly!",
            }));
        } else {
            const newAttemptsLeft = gameState.attemptsLeft - 1;
            let feedback = guess > gameState.targetNumber ? "You should guess lower!" : "You should guess higher!";
            if (newAttemptsLeft === 0) {
                clearInterval(timerRef.current);
                feedback = "You've run out of attempts!";
            }
            setGameState((prevState) => ({
                    ...prevState,
                    attemptsLeft: newAttemptsLeft,
                    feedbackMessage: feedback,
                    isGameOver: newAttemptsLeft === 0,
                    guessResultDisplay: true,
                }
            ));
        }
    };
    const handleGuessAgain = () => {
        setGameState((prevState) => ({
            ...prevState,
            userGuess: "",
            feedbackMessage: null,
            guessResultDisplay: false,
        }));

    }

    const handleStartGame = () => {
        const multiplesArray = getMultiplesArray(phoneNumber);
        const targetNumber = getRandomNum(multiplesArray);
        setGameState((prevState) => ({
            ...prevState,
            hasGameStarted: true,
            targetNumber: targetNumber,
        }));
    };
    const {
        userGuess,
        attemptsLeft,
        timeLeft,
        isGameOver,
        hintMessage,
        feedbackMessage,
        hasGameStarted,
        guessResultDisplay,
    } = gameState;

    const renderGameContent = () => {
            if (isGameOver) {
                const isWin =
                    feedbackMessage && feedbackMessage.startsWith("You guessed correctly");
                const imageSource = isWin
                    ? {uri: `https://picsum.photos/id/${gameState.targetNumber}/100/100`}
                    : require("../assets/sad_smiley.png");

                return (
                    <View style={styles.card}>
                        {!isWin && <Text style={styles.resultText}>The game is over</Text>}
                        <Image source={imageSource} style={styles.image}/>
                        <Text style={styles.resultText}>{feedbackMessage}</Text>
                        {isWin && <Text style={styles.resultText}>Attempts used {5 - attemptsLeft}</Text>}
                        <TouchableOpacity onPress={handleNewGame} style={styles.button}>
                            <Text style={styles.buttonText}> NEW GAME</Text>
                        </TouchableOpacity>
                    </View>
                );
            }

            if (!hasGameStarted) {
                return (
                    <View style={styles.card}>
                        <Text style={styles.title}>
                            Guess the number between 1 and 100. That is multiple of {phoneNumber[9]} (inclusive).</Text>
                        <TouchableOpacity onPress={handleStartGame} style={styles.button}>
                            <Text style={styles.buttonText}>START</Text>
                        </TouchableOpacity>
                    </View>
                );
            }

            if (!guessResultDisplay && !isGameOver) {
                return (
                    <View style={styles.card}>
                        <Text style={styles.title}>Guess the number between 1 and 100. That is multiple of {phoneNumber[9]} (inclusive)</Text>
                        <TextInput
                            style={[styles.input, styles.inputUnderline]}
                            placeholder="Enter your guess"
                            keyboardType="number-pad"
                            maxLength={3}
                            onChangeText={handleInputChange}
                            value={userGuess}
                        />
                        <Text style={styles.infoText}>Time Left: {timeLeft}s</Text>
                        <Text style={styles.infoText}>Attempts Left: {attemptsLeft}</Text>
                        {hintMessage ? (
                            <Text style={styles.hintText}>{hintMessage}</Text>
                        ) : null}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={gameState.hasUsedHint ? styles.buttonDisabled : styles.button}
                                onPress={handleHint}
                                disabled={gameState.hasUsedHint}
                            >
                                <Text style={styles.buttonText}>USE A HINT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleGuess}>
                                <Text style={styles.buttonText}>SUBMIT GUESS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>);
            } else {
                return (
                    <View style={styles.card}>
                        <Text style={styles.title}>You did not guess correct!</Text>
                        <Text style={styles.buttonText}>
                            {feedbackMessage}
                        </Text>
                        <TouchableOpacity onPress={handleGuessAgain} style={styles.button}>
                            <Text style={styles.buttonText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEndGame} style={styles.button}>
                            <Text style={styles.buttonText}>END GAME</Text>
                        </TouchableOpacity>
                    </View>);

            }
        }
    ;


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.select({ios: "padding", android: undefined})}
                style={{flex: 1}}
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <LinearGradientBackground>
                        <TouchableOpacity onPress={onRestart} style={styles.restartButton}>
                            <Text style={styles.buttonText}>RESTART</Text>
                        </TouchableOpacity>
                        {renderGameContent()}
                    </LinearGradientBackground>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )

}
const styles = StyleSheet.create({
    restartButton: {
        alignSelf: "flex-end",
        margin: 10,
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    card: {
        width: "90%",
        padding: 75,
        borderRadius: 10,
        backgroundColor: Colors.blue,
        opacity: 0.9,
        alignItems: "center",
        ...Platform.select({
            ios: {
                shadowColor: Colors.primary,
                shadowOffset: {width: 2, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 15,
            },
        }),
    },
    title: {
        fontSize: 24,
        color: Colors.primary,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "80%",
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        marginBottom: 20,
        color: Colors.primary,
        textAlign: "center",
    },
    inputUnderline: {
        borderBottomWidth: 2, // Thickness of the underline
        borderBottomColor: 'blue', // Color of the underline
        width: 200, // Set width differently for iOS and Android
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
    },
    hintText: {
        fontSize: 16,
        color: Colors.red,
        marginBottom: 10,
        textAlign: "center",
    },
    buttonContainer: {
        width: "100%",
    },
    button: {
        width: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    resultText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: Colors.primary,
        textAlign: "center",
    },
    hasUsedHint: {
        backgroundColor: Colors.gray,
        color: Colors.red,
    },
});
