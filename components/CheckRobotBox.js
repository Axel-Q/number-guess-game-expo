import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {CheckBox} from "react-native-elements";

export default function CheckRobotBox() {
    return (
        <View style={{flexDirection: 'row'}}>
            <CheckBox/>
            <Text style={styles.text}>I am not a robot</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 15,
    },
});