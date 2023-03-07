import { View, Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
StyleSheet

const CustomPressable = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.ForgetButton} >
        <Text style={styles.Forget}>Forget Password </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.LoginButton} onPress={()=>navigation.push('HomeScreen')}>
        <Text style={{color:'white'}}>Login </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      justifyContent: 'center',
      alignItems: 'center'
  },
  LoginButton:{
     width:ScreenWidth*0.75,
     borderRadius:25,
     height:80,
     alignItems:'center',
     justifyContent:'center',
     margin: 20,
     backgroundColor:'blue'
  },
  Forget:{
    color:'red',
    height: 25,
  },
  ForgetButton:{
    alignItems:'center',
    justifyContent:'center',
    margin: 10
  }
})
export default CustomPressable