import React from 'react';
import { StyleSheet, Text, TextInput, View , Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function FlatListTodo({item}) {
  return (
      <View>
          <TouchableOpacity>
          <View>
            
              <Text style={styles.container}>{item.value}</Text>
              
          </View>
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
});
