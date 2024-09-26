/**
 * CustomizedButton.js
 *
 * This file contains the CustomizedButton component, which is a reusable button component
 * with customizable styles. It allows you to set the title, onPress handler, background color,
 * and disabled state. It uses the TouchableOpacity component for better user interaction feedback.
 *
 * Features:
 * - Customizable background color with a default fallback.
 * - Handles disabled state with visual feedback.
 * - Customizable text and styles.
 * - Reusable across different parts of the app.
 *
 * @format
 * @flow
 */

import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import Colors from "../helperFile/colors";

/**
 * CustomizedButton component: A customizable button component.
 * @param {object} props - Component props.
 * @param {string} props.title - The text to display on the button.
 * @param {function} props.onPress - Function to call when the button is pressed.
 * @param {string} [props.backgroundColor] - Custom background color for the button.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered component.
 */
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