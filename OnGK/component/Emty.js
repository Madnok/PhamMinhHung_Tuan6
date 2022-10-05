import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function Emty() {
  return (
    <View style={styles.container}>
    
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection:'column',
    marginTop:20,
  },
});