import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import Colors from "../helperFile/colors";

export default function CustomizedButton({title, onPress, backgroundColor, disabled}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor || Colors.secondary},
        disabled && styles.buttonDisabled]}
                          onPress={onPress}
                          disabled={disabled}>
            <Text style={[styles.buttonText, disabled && styles.textDisabled]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.white,
    },
    buttonDisabled: {
        backgroundColor: Colors.disabled,
    },
    textDisabled: {
        color: Colors.gray,
    },
});