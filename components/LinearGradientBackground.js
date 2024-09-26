import {StyleSheet, View} from "react-native";
import Colors from "../helperFile/colors";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

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