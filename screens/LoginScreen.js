import { StyleSheet, Text, TextInput, View,Pressable, SafeAreaView} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomLogo from '../components/CustomLogo'
import CustomTextInput from '../components/CustomTextInput'
import CustomPressable from '../components/CustomPressable'
import { handlePasswordVisiblity } from '../hooks/handlePasswordVisiblity';

const LoginScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}> 
      <CustomLogo />
      <CustomTextInput holder={'email'}/>
      <CustomTextInput holder={'password'}/>
      <CustomPressable navigation={navigation}/>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})
