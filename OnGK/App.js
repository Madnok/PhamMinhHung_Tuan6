import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';


export default function App() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Please Insert Something'/> 
      <TouchableOpacity style={styles.button} 
        onPress={() => {
          alert('button clicked')
        }}
      >
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
    width: 50,
    justifyContent: 'center',
    backgroundColor: '#0099ff',
    marginTop:20,
    marginBottom: 20,
    borderRadius: 20,
    alignItems:'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
