import React from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';

export default function EmailTextInputs() {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.inputContainer}>
            <StatusBar style="auto"/>
            <View style={styles.input}>
                <TextInput value={text}
                           onChangeText={setText}
                           placeholder="Input your Email here"
                           autoCorrect={false}/>
                {(text.length > 0 && text.includes('@') ? <Text></Text> : <Text> "Please enter a valid email" </Text>)}
            </View>
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