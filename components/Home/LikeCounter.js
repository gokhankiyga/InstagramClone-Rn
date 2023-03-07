import { View, Text } from 'react-native'
import React from 'react'

const LikeCounter = ({post}) => {
  return (
    <View style={{margin:2}}>
      <Text style={{color:'white'}}>{post.likes} likes</Text>
    </View>
  )
}

export default LikeCounter