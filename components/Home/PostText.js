import { View, Text } from 'react-native'
import React from 'react'
//Caption text and userName 
//put space in to text so there is a gap between username and caption text.
const PostText = ({post}) => {
    return (
        <View>
            <Text style={{ color: 'white' }}>
                <Text style={{ fontWeight: '600'}}>{post.userName} </Text>
                <Text>{post.bodyText}</Text>
            </Text>
        </View>
    )
}

export default PostText