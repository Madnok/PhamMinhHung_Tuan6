import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';

import FlatListTodo from './component/FlatListTodo';
import Blank from './component/Blank';
import { useState } from 'react';
import InputSubmit from './component/InputSubmit';

export default function App() {
  const [data, setData] = useState([]);

  const submitHandlerButton = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };
  
  return (
    <View style={styles.container}>
      <InputSubmit submitInput={submitHandlerButton}></InputSubmit>
      <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key }
            renderItem={({item}) => (
              <FlatListTodo item={item}></FlatListTodo>
            )}
            />
      </View>
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
