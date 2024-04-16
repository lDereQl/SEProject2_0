import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const EventDetails = ({navigation}) => {

    const route = useRoute();
    const {item} = route.params;
    console.log(item);
    
  return (
    <View>
      <Text>EventDetails</Text>
    </View>
  )
}

export default EventDetails

const styles = StyleSheet.create({})