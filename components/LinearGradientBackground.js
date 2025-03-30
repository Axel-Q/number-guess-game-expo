/**
 * LinearGradientBackground.js
 *
 * This file contains the LinearGradientBackground component, which provides a reusable
 * background with a linear gradient for your app. It wraps its children components
 * within a styled View that includes the gradient effect.
 *
 * Features:
 * - Applies a linear gradient background using predefined colors.
 * - Centers its child components both vertically and horizontally.
 * - Ensures consistent styling across different screens in the app.
 *
 * @format
 * @flow
 */

import {StyleSheet, View} from "react-native";
import Colors from "../helperFile/colors";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";


/**
 * LinearGradientBackground component: Wraps child components with a linear gradient background.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the gradient background.
 * @returns {JSX.Element} The rendered component.
 */
export default function LinearGradientBackground({children}) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient}
                            style={styles.base}>
                <View style={styles.children}>{children}</View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.85,
    },
    base: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    children: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});