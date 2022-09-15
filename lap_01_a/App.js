import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.image}>


        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('./assets/circle.png')}></Image>

        </View>
        <View style={styles.center}>

          <Text style={styles.text1}>        GROW</Text>
          <Text style={styles.text1}>YOUR BUSINESS</Text>

          <Text style={styles.text2}>We will help you to grow your business using                          </Text>
          <Text style={styles.text3}>online server</Text>

        </View>


        <View style={styles.bottom}>
          <Button style={styles.btn} title='LOGIN'></Button>
          <Button style={styles.btn} title='SIGN UP'></Button>
        </View>

      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {

    justifyContent: 'center',
    top:100,
    left:130


  },
  top: {
    flex: 1,

  },
  text1: {
    justifyContent: 'center',

    fontSize: 25,
    top: 50,
    left: 100


  },
  text2: {

    fontsize: 50,
    top: 100,
    left: 55
  },
  text3: {

    fontsize: 50,
    top: 100,
    alignItems: 'center',
    left: 150
  },
  center: {
    flex: 1,



  },
  bottom: {
    flex: 1,
     alignItems:'center'
    
  },
  btn:{
    width:100,
    height:50
  }
});
