import { Dimensions, StyleSheet, Text, View,Image, SafeAreaView } from 'react-native'
import React from 'react'

const logoUri = 'https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-128.png';
const CustomLogo = () => (
    <View style={styles.logocontainer}>
      <Image source={{uri: logoUri , width:100, height:100}} />
    </View>
)
const screenwidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    logocontainer:{
        margin: 20,
        justifyContent: 'center',
    }
})
export default CustomLogo