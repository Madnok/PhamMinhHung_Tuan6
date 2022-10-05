import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,React, Button, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function FlatListTodo({item}) {
  return (
    <View style={styles.container}>{item.value}</View>
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
