import {StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DescriptionText = () => {
return (
 <View>
 <Text>DescriptionText</Text>
 </View>
 )
}

export default DescriptionText

const styles = StyleSheet.create({
 description: {
   paddingVertical: 10,
   fontFamily: "regular",
   textAlign: "justify",
   fontSize: Text.medium
   }
})