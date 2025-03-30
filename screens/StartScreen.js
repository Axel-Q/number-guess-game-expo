/**
 * StartScreen.js
 *
 * This file contains the StartScreen component, which serves as the initial screen of the app.
 * Users can enter their name, email, and phone number, and confirm they are not a robot.
 * The component includes input validation for each field and manages form submission.
 *
 * Features:
 * - Input fields for name, email, and phone number with validation.
 * - A checkbox to confirm the user is not a robot.
 * - Customizable buttons for resetting the form and submitting the data.
 * - Displays error messages for invalid inputs.
 *
 * @format
 * @flow
 */

import React, {useState} from "react";
import {StatusBar, View, Text, StyleSheet, TextInput, Button} from "react-native";
import Colors from "../helperFile/colors";
import CustomizedButton from "../components/CustomizedButton";
import CheckRobotBox from "../components/CheckRobotBox";
import Card from "../components/Card";


/**
 * StartScreen component: Allows the user to input their information and start the game.
 * @param {object} props - Component props.
 * @param {function} props.handleStart - Function to handle starting the game.
 * @param {object} props.user - User object containing name, email, phoneNumber, and notRobot flag.
 * @returns {JSX.Element} The rendered component.
 */
export default function StartScreen({handleStart, user}) {
    const [name, setName] = useState(user.name || "");
    const [email, setEmail] = useState(user.email || "");
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
    const [notRobot, setNotRobot] = React.useState(user.notRobot);
    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [phoneNumberError, setPhoneNumberError] = React.useState("");
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    /**
     * Handles changes to the name input field.
     * @param {string} text - The current text in the input field.
     */
    const handleNameChange = (text) => {
        setName(text);
        checkNameValidity(text);
    };
    /**
     * Handles changes to the email input field.
     * @param {string} text - The current text in the input field.
     */
    const handleEmailChange = (text) => {
        setEmail(text);
        checkEmailValidity(text);
    };

    /**
     * Handles changes to the phone number input field.
     * @param {string} text - The current text in the input field.
     */
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
        checkPhoneNumberValidity(text);
    };

    /**
     * Validates the name input.
     * - Must be more than one character.
     * - Must not contain any numbers.
     * @param {string} name - The name input to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    const checkNameValidity = (name) => {
        if (name.trim().length <= 1 || /\d/.test(name)) {
            setNameError(
                "Name must be more than one char no number"
            );
            return false;
        }
        setNameError("");
        return true;
    };

    /**
     * Validates the email input using a regex pattern.
     * @param {string} email - The email input to validate.
     * @returns {boolean} True if valid, false otherwise.
     */
    const checkEmailValidity = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\..[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email");
            return false;
        }
        setEmailError("");
        return true;
    };


    /**
     * Validates the phone number input.
     * - Must be exactly 10 digits.
     * - Last digit must not be '0' or '1'.
     * @param {string} phoneNumber - The phone number input to validate.
     * @returns {boolean} True if valid, false otherwise.
     */

    const checkPhoneNumberValidity = (phoneNumber) => {
        // Check if the phoneNumber consists of exactly 10 digits
        if (!/^\d{10}$/.test(phoneNumber)) {
            setPhoneNumberError("Phone number must be exactly 10 digits with no characters");
            return false;
        }

        // Check if the last digit is not '0' or '1'
        const lastDigit = phoneNumber.charAt(phoneNumber.length - 1);
        if (lastDigit === "0" || lastDigit === "1") {
            setPhoneNumberError("The last digit cannot be 0 or 1");
            return false;
        }

        // If all checks pass, clear any previous errors
        setPhoneNumberError("");
        return true;
    };

    /**
     * Handles form submission.
     * Validates all inputs and calls handleStart if valid.
     */
    const handleFormSubmission = () => {
        const isNameValid = checkNameValidity(name);
        const isEmailValid = checkEmailValidity(email);
        const isPhoneNumberValid = checkPhoneNumberValidity(phoneNumber);

        if (isNameValid && isEmailValid && isPhoneNumberValid && notRobot) {
            handleStart(name, email, phoneNumber);
            console.log("Form submitted successfully!");
        } else {
            console.log("Form is invalid. Please correct the errors.");
        }
    };

    /**
     * Clears the form inputs and resets validation messages.
     */
    const clearForm = () => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setNotRobot(false);
        setNameError("");
        setEmailError("");
        setPhoneNumberError("");
    }


    /**
     * useEffect hook to enable or disable the Register button based on the notRobot state.
     */
    React.useEffect(() => {
        if (
            notRobot
        ) {
            setButtonDisabled(false);
        } else
            setButtonDisabled(true);
    }, [notRobot]);

    return (
        <View>
            <Text style={styles.title}>Welcome to Axel's App</Text>
            <Card>
                <StatusBar style="auto"/>
                <View style={styles.inputContainer}>
                    <Text>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Name here"
                        value={name}
                        onChangeText={handleNameChange}
                        autoCorrect={false}
                    />
                    {nameError !== "" && (
                        <Text style={styles.errorText}>{nameError}</Text>
                    )}
                </View>

                <View style={styles.inputContainer}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Email here"
                        value={email}
                        onChangeText={handleEmailChange}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    {emailError !== "" && (
                        <Text style={styles.errorText}>{emailError}</Text>
                    )}
                </View>
                <View style={styles.inputContainer}>
                    <Text>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your Phone Num here"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                    />
                    {phoneNumberError !== "" && (
                        <Text style={styles.errorText}>{phoneNumberError}</Text>
                    )}
                </View>
                <CheckRobotBox value={notRobot} click={setNotRobot}/>
                <View style={styles.buttonContainer}>
                    <CustomizedButton title="Reset" onPress={clearForm} backgroundColor={Colors.primary}/>
                    <CustomizedButton title="Register" onPress={handleFormSubmission} disabled={buttonDisabled}/>
                </View>
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: Colors.purple,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    card: {
        backgroundColor: Colors.gray,
        borderRadius: 15,
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        // Elevation for Android
        elevation: 20,
        height: 500,
        width: 300,
        paddingHorizontal: 20,
        justifyContent: 'center',
        opacity: 0.9,
    },
    inputContainer: {
        marginVertical: 20,
    },
    input: {
        borderBottomColor: Colors.purple,
        borderBottomWidth: 3,
    },
    errorText: {
        color: Colors.red,
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
});