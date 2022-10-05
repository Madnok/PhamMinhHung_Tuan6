import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function AddInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Please Insert Something'/>
      <TouchableOpacity 
      style={{
         justifyContent: 'center',
         backgroundColor: '#0099ff',
         width: 200,
         marginBottom: 20,
         alignItems:'center',
        height:50,
        marginLeft:150,
        borderRadius:10
        }} 
        onPress={() => {alert('button clicked')}} >
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
    width:450,
    borderColor: 'black',
    borderWidth: 1
 },
});
