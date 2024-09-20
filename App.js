import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";
import colors from "./helperFile/colors";

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
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
