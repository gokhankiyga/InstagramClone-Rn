import { Image, StyleSheet,  TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchHeader = ({navigation}) => {
  return (
    <View >
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image style={styles.container} source={{uri:'https://cdn0.iconfinder.com/data/icons/ui-essence/32/_27ui-128.png'}}/>
      </TouchableOpacity>
    </View>
  )
}

export default SearchHeader

const styles = StyleSheet.create({
    container:{
        height:40,
        width:40,
    }
})