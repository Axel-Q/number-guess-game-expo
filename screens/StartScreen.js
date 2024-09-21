import React from "react";
import {StatusBar, View, Text, StyleSheet, TextInput, Button} from "react-native";
import Colors from "../helperFile/colors";
import CustomizedButton from "../components/CustomizedButton";
import CheckRobotBox from "../components/CheckRobotBox";

export default function StartScreen({handleStart}) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [notRobot, setNotRobot] = React.useState(false);
    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [phoneNumberError, setPhoneNumberError] = React.useState("");
    const [formValid, setFormValid] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const handleNameChange = (text) => {
        setName(text);
        checkNameValidity(text);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
        checkEmailValidity(text);
    };
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
        checkPhoneNumberValidity(text);
    };
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
    const checkEmailValidity = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\..[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email");
            return false;
        }
        setEmailError("");
        return true;
    };
    const checkPhoneNumberValidity = (phoneNumber) => {
        const digits = phoneNumber.replace(/\D/g, "");
        const lastDigit = digits.charAt(digits.length - 1);
        if (digits.length !== 10 || lastDigit === "0" || lastDigit === "1") {
            setPhoneNumberError("Phone number must be 10 digits and last digit not 0 or 1");
            return false;
        }
        setPhoneNumberError("");
        return true;
    };
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

    const clearForm = () => {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setNotRobot(false);
        setNameError("");
        setEmailError("");
        setPhoneNumberError("");
    }

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
            <View style={styles.card}>
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
            </View>
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation for Android
        elevation: 15,
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