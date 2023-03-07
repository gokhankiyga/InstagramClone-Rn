import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Story from '../components/Home/Story'
import { Post } from '../data/posts'
import PostComponent from '../components/Home/PostComponent'
import Footer from '../components/Home/Footer'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
            <Header navigation={navigation}/>
            <Story />
            <ScrollView vertical showsverticalScrollIndicator={false}>
                {Post.map((item, index) => (

                    <PostComponent post={item} key={index} />

                ))}
          </ScrollView>
            
            <Footer/>
            
        
        </SafeAreaView>
    )
}

export default HomeScreen