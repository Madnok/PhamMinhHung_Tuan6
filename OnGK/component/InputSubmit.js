import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function InputSubmit({ submitInput }) {
  const [value, setValue] = useState("");
  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Please Insert Something' onChangeText={onChangeText}/>
      <TouchableOpacity 
      style={{
         justifyContent: 'center',
         backgroundColor: '#0099ff',
         width: 200,
         marginBottom: 20,
         alignItems:'center',
        height:50,
        marginLeft:115,
        borderRadius:10
        }} 
        onPress={() => {setValue(submitInput(value));}} >
        <Text>Submit</Text>
      </TouchableOpacity>  
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
  button:{
    
   
   
  },
  input: {
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom:20,
    padding:5,
    marginTop:20,
    height: 40,
    width:380,
    borderColor: 'black',
    borderWidth: 1
 },
});
