import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import React from "react"

export default function App() {

  const [user,setUser] = React.useState('');
  const [pass,setPass] = React.useState('');
  const account=[
    {user:'hocnv',pass:'112233'},
    {user:'hoangnp',pass:'123456'},
  ]
  function login(){
    var acc = account.find((item)=>{
        return user === item.user && pass===item.pass;
    })
    if(acc){
      alert('login success')
    }else{
      alert('login Failed')
    }
  }
  return (
    <View style={styles.container}>
      
      <TextInput placeholder='enter username' onChangeText={username=> setUser(username)} value={user}></TextInput>
      <TextInput placeholder='enrt password' onChangeText={password => setPass(password)} secureTextEntry={true} value={pass}></TextInput>
      <Button title='LOGIN' onPress={login}></Button>

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
