import React from "react";
import {StatusBar, View, Text, StyleSheet, TextInput} from "react-native";

export default function NameTextInputs() {
    const [text, setText] = React.useState("");
    const handleTextChange = (text) => {
        const onlyLetters = text.replace(/[^A-Za-z]/g, '');
        setText(onlyLetters);
    }
    return (
        <View style={styles.inputContainer}>
            <StatusBar style="auto"/>
            <TextInput style={styles.input}
                       placeholder="Input your Name here"
                       value={text}
                       onChangeText={handleTextChange}
                       autoCorrect={false}/>
            {(text.length < 2 && text.length > 0 ? <Text> "Please enter a valid name" </Text> : <Text></Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
    },
});