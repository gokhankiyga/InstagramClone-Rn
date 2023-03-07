import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stories } from '../../data/stories'

const Story = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Stories.map((item,index)=>(
            <View key={index} style ={styles.storyContainer}>
            <TouchableOpacity>
            <Image style = {styles.ImageContainer} source={{uri:item.storySource}}/>
            </TouchableOpacity>
            <Text style={styles.userName}>{item.user}</Text>
            </View>
        ))}
      </ScrollView>
      
    </View>
  )
}

export default Story

const styles = StyleSheet.create({
    ImageContainer: {
        width:80,
        height:80,
        borderRadius:50,
        borderColor:'pink',
        borderWidth:3,
        marginBottom:10,
        marginRight:5,
    },
    storyContainer:{
        alignItems:'center'
    },
    userName:{
        color:'white',
        marginBottom:5,
    }
})