import { StyleSheet, FlatList, View } from 'react-native'
import {Image} from 'expo-image'
import { Video } from 'expo-av'
import { handleScrollEvent } from '../../hooks/handleSearchScreenScroll'
import { ScreenWidth } from 'react-native-elements/dist/helpers'
import { ScreenData } from '../../data/searchScreendata'


const GridScreen = () => {
  const { playIndex, handleScroll } = handleScrollEvent()
  return (
    <View style={styles.container}> 
      <FlatList
        numColumns={2}        
        onScroll={handleScroll}
        data={ScreenData}
        renderItem={({ item }) => {
          if(item.type === 'video'){
            return(
              <Video
              isMuted
              isLooping
              style={styles.Video}
              source={{ uri: item.id }}
              resizeMode='cover'
              shouldPlay={playIndex < item.row} />
            )
          }
          else{
            return(
              <Image
              style={styles.Video}
              source={{ uri: item.id }}
              contentFit='cover'
              />
            )
          }
        }}
          

      />
    </View>
  )
}

export default GridScreen

const styles = StyleSheet.create({
  Video:{
    height:300,
    width: ScreenWidth * 0.5
  },
  container:{
    flexDirection:'row',
  }
})