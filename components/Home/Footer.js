import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HomeFooterIcon } from '../../data/HomeFooterIcon'
import { Divider } from 'react-native-elements'

const Footer = () => {
  return (
    <View style={styles.container}>
    <Divider/>
     {HomeFooterIcon.map((item,index)=>(
        <TouchableOpacity key={index}>
            <Image style={styles.icon} source={{uri:item.Iconurl}}/>
        </TouchableOpacity>
     ))} 
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        marginTop:10,
        marginRight:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    icon:{
        width:40,
        height:40
    }
})