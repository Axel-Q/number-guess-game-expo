// Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from "../helperFile/colors";
import Colors from "../helperFile/colors";


/**
 * Card component: A reusable container with consistent styling.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the card.
 * @param {object} [props.style] - Additional styles to apply to the card.
 * @returns {JSX.Element} The rendered component.
 */
export default function Card({ children }) {
    return (
        <View style={[styles.card]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
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
});