import React from "react";
import {StatusBar, View, Text, StyleSheet, TextInput, Button} from "react-native";
import Colors from "../helperFile/colors";
import CustomizedButton from "../components/CustomizedButton";
import {CheckBox} from "react-native-elements";
import CheckRobotBox from "../components/CheckRobotBox";

export default function StartScreen() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [notRobot, setNotRobot] = React.useState(false);
    const [formValid, setFormValid] = React.useState(false);

    const handleNameChange = (text) => {
        const onlyLetters = text.replace(/[^A-Za-z]/g, "");
        setName(onlyLetters);
    };
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text);
    };
    const checkNameValidity = (name) => {
        return name.length >= 2;
    };
    const checkEmailValidity = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\..[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };
    const checkPhoneNumberValidity = (phoneNumber) => {
        const digits = phoneNumber.replace(/\D/g, "");
        if (digits.length !== 10) {
            return false;
        }
        const lastDigit = digits.charAt(digits.length - 1);
        return !(lastDigit === "0" || lastDigit === "1");
    };
    const handleFormSubmission = () => {
        if (formValid) {
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
    }

    React.useEffect(() => {
        if (
            notRobot
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [name, email, phoneNumber, notRobot]);

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
                    {name.length > 0 && !checkNameValidity(name) && (
                        <Text style={styles.errorText}>
                            Please enter a valid name (at least 2 letters, no numbers)
                        </Text>
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
                    {email.length > 0 && !checkEmailValidity(email) && (
                        <Text style={styles.errorText}>Please enter a valid email</Text>
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
                    {phoneNumber.length > 0 && !checkPhoneNumberValidity(phoneNumber) && (
                        <Text style={styles.errorText}>
                            Please enter a valid phone number (10 digits, last digit not 0 or
                            1)
                        </Text>
                    )}
                </View>
                <CheckRobotBox value={notRobot} click={setNotRobot}/>
                <View style={styles.buttonContainer}>
                    <CustomizedButton title="Reset" onPress={clearForm} backgroundColor={Colors.primary}/>
                    <CustomizedButton title="Register" onPress={handleFormSubmission} disabled={!formValid}/>
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