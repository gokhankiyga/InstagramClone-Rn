import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostHeader = ({ post }) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.profile} source={{ uri: post.profilePhoto }} />
                    <Text style={styles.user}>{post.userName}</Text>
                </View>
                <Text style={styles.dot}>...</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    profile: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: 'pink',
        borderWidth: 1,
    },
    user: {
        color: 'white',
        marginLeft: 5
    },
    dot: {
        color: 'white',
        fontWeight: '600',
    }
})
export default PostHeader

