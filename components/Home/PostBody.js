import { Image, StyleSheet, FlatList,Text, View, ScrollView } from 'react-native'
import React from 'react'
import { ScreenWidth } from 'react-native-elements/dist/helpers'
import { Video } from 'expo-av'

const PostBody = ({post}) => {
  //if post elements array is equal to render image add scrollview as horizontal and for the swipe effect I used pagingEnabled
  if(post.postImage.length === 2){
    return (
      <View style={{flex:0,flexDirection:'row',justifyContent:'center'}}>
      <ScrollView horizontal pagingEnabled >
      {post.postImage.map((item,index)=>(
          <Image  key ={index} style={styles.ImageBody} source={{ uri: item.imUrl }} />
          
      ))}
      </ScrollView>
      </View>
    )
  }
  else{
    //return video for the simplicty I check only post array size and always play it can be updated easily future needs
    return(
      <View>
      <Video
            isMuted
            isLooping
            style={styles.ImageBody}
            source={{ uri: post.postImage[0].imUrl  }}
            shouldPlay
            />
      </View>
      
    )
  }
  }
  
    


export default PostBody

const styles = StyleSheet.create({
    ImageBody:{
        width: ScreenWidth,
        height:450,
        resizeMode:'cover'
    }
})