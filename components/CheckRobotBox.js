/**
 * CheckRobotBox.js
 *
 * This file contains the CheckRobotBox component, which provides a checkbox
 * for the user to confirm they are not a robot. It uses the `CheckBox` component
 * from `react-native-elements` and displays a label next to it.
 *
 * Features:
 * - Displays a checkbox with a label "I am not a robot".
 * - Handles the checked state through props.
 * - Allows for a custom click handler.
 *
 * @format
 * @flow
 */

import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {CheckBox} from "react-native-elements";


/**
 * CheckRobotBox component: A checkbox with a label for confirming the user is not a robot.
 * @param {object} props - Component props.
 * @param {boolean} props.value - The checked state of the checkbox.
 * @param {function} props.click - Function to call when the checkbox is pressed.
 * @returns {JSX.Element} The rendered component.
 */
export default function CheckRobotBox({value, click}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <CheckBox checked={value} onPress={click}/>
            <Text style={styles.text}>I am not a robot</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 15,
    },
});