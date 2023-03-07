import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import LikeCounter from './LikeCounter'
import PostComment from './PostComment'
import PostText from './PostText'


const PostComponent = ({post}) => {
  return (
    <View style={{marginBottom:10}}>
      <Divider orientation='vertical'/>
      <PostHeader post={post}/>
      <PostBody post={post}/>
      <PostFooter />
      <LikeCounter post={post}/>
      <PostText post={post}/>
      <PostComment post={post}/>
    </View>
  )
}

export default PostComponent

