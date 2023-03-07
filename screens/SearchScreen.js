import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import GridScreen from '../components/SearchScreen/GridScreen'
import SearchHeader from '../components/SearchScreen/SearchHeader'

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}} >
      <SearchHeader navigation={navigation}/>
      <GridScreen/>
    </SafeAreaView>
  )
}

export default SearchScreen