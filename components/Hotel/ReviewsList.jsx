import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReviewTle from '../Titles/Reviews/ReviewTle'

const ReviewsList = ({reviews}) => {
  return (
    <FlatList
        data={reviews}
        scrollEnabled={false}
        showsVerticalScrollImdicator={false}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
            <ReviewTle reviews={item}/>
        )}
    />
  )
}

export default ReviewsList

const styles = StyleSheet.create({})