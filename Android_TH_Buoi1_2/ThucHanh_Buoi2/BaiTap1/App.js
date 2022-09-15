import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View ,Button,TextInput,Alert} from 'react-native';

export default function App() {

  const [text,setText] = React.useState('');

  return (
    <View style={styles.container}>
      

      <TextInput placeholder='Nhap Name' onChangeText={name=>setText(name)}></TextInput>
      <Button title='Show' onPress={()=> alert(text)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
