import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//comments length equals 0 then show text is not required
// comments length 1 show text does not include 'all' word and comment is singular.
//comments length bigger than 1 then show text include 'all' word and comment takes plural extension (s).

const PostComment = ({post}) => {
  let IsRendered = false
  post.comments.length === 0 ? IsRendered = false : IsRendered = true
  return (
    <View style={{marginBottom:10}}>
      {IsRendered &&(
      <Text style={{color:'gray'}}>
        Show {post.comments.length > 1 ? 'all':''} {post.comments.length }
        {post.comments.length > 1 ? ' comments' : ' comment'}
      </Text>
      )}
      {post.comments.map((item,index)=>(
        <View key={index}>
        <Text style={{fontWeight:'300',color:'white'}}>
            <Text style={{fontWeight:'600'}}>{item.userName}</Text>
            {' '}{item.comment}
        </Text>
        </View>
      ))}
    </View>
  )
}

export default PostComment

const styles = StyleSheet.create({})