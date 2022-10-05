import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import AddInput from './component/AddInput';
import FlatListTodo from './component/FlatListTodo';
import Emty from './component/Emty';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  
  return (
    
    <View style={styles.container}>
      <View>
          <FlatList
            data={data}
           renderItem={({ item }) => (
              console.log(item)
            )}
          />
        </View>
        <AddInput></AddInput>
        <FlatListTodo></FlatListTodo>
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
