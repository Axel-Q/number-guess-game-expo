import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <StartScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
