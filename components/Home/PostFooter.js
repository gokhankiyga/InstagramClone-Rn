import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PostFooterIcon } from '../../data/PostFooterIcon'
//Share icon outside of loop because it has to be located right-end.
const PostFooter = () => {
  return (
    <View style={styles.container}>
     {PostFooterIcon.map((item,index)=>(
        <TouchableOpacity key={index}>
            <Image style={styles.icon} source={{uri:item.Iconurl}}/>
        </TouchableOpacity>
     ))} 
     <View style={styles.share}>
     <TouchableOpacity>
            <Image style={styles.icon} source={{uri:'https://cdn0.iconfinder.com/data/icons/general-blueline/96/bookmark-512.png'}}/>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default PostFooter

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,
        
    },
    container:{
        marginTop:5,
        marginBottom:5,
        flexDirection:'row'
    },
    share:{
        flex:1,
        alignItems:'flex-end'
    }
})