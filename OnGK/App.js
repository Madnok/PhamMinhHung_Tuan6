import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, React, Button, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import AddInput from './component/AddInput';
import FlatList from './component/FlatList';

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        AddInput > < /AddInput> <
        /View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: 20,
    },

});