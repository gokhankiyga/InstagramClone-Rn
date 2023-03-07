import { View, Text, SafeAreaView,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
const logo = 'https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-icon-white-border-text-black-background.png'
const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={{uri:logo}}
      style={{width:125,height:100,resizeMode:'contain'}}/>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=>navigation.push('SearchScreen')}>
            <Image style={styles.icon}
            source={{uri:'https://cdn1.iconfinder.com/data/icons/hawcons/32/698838-icon-111-search-512.png'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.icon}
            source={{uri:'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/heart-sign-128.png'}}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.icon}
            source={{uri:'https://cdn2.iconfinder.com/data/icons/social-media-and-payment/64/-59-512.png'}}/>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    headerContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'black',      
        flexDirection: 'row',
    },
    iconContainer:{
        flexDirection:'row'
    },
    icon:{
        marginRight:5,
        width:35,
        height:35,
        resizeMode:'contain'
    }
    
})
export default Header