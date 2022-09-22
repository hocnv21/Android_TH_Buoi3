import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

export default function App() {
  return (


    <View style={styles.container}>

        <View style={styles.header}>

        <Image source={require('./assets/book.png')}></Image>
          <Text>Nguyên hàm tích phân và ứng dụng</Text>
          <Text>cung cấp bởi Tiki Trading</Text>
          <Text style={styles.styleText}>141.800 đ</Text>

        </View>

        <View style={styles.center}>
          <Text style={styles.textBold}>Bạn có phiếu quà tặng Tiki/Got it/Urbox? </Text>
          <Text style={{color:'blue'}}>Nhập tại đây?</Text>

        </View>

        <View style={styles.bottom}>
          
          <View style={styles.tamtinh}>
            <Text style={{marginRight:220 ,fontWeight:'bold'}}>Tạm tính  </Text> 
            <Text style={styles.styleText}>  141.800 đ</Text>
            
          </View>

          <View style={styles.nen}>
            <Text></Text>

          </View>
          <View style={styles.thanhtien}>
            <Text style={{marginRight:220 ,fontWeight:'bold'}}>Thành tiền </Text>
            <Text style={styles.styleText}>141.800 đ</Text>
          </View>

          <View style={styles.btnThanhtien}>
            <Button title='Tien hanh dat hang' color='red'></Button>
          </View>

        </View>
        



      

      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCB7B6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:5,
    backgroundColor:'#fff',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    flex:1,
    backgroundColor:'#fff',
    marginVertical:20,
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
    
    
   
  },
  bottom:{
    flex:5,
    backgroundColor:'#fff',
    width:'100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tamtinh:{
    flex:1,
    justifyContent:'center',
    backgroundColor :'#fff',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    

  },
  nen:{
    flex:2,
    backgroundColor:'#BCB7B6',
    width:'100%'
  },
  thanhtien:{
    flex:1,
    backgroundColor:'#fff',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    display:'flex'
    
  },
  btnThanhtien:{
    flex:1,
    
    width:'100%',
    height:'100%',
  },
  styleText:{
    color:'red'
  },
  textBold:{
    fontWeight:'bold',
  }
  

});
