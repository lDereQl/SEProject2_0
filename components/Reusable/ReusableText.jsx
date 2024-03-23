import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const ReusableText = ({text, family, size, color}) => {
  return (
    <Text style={style.textStyles(family, size, color)}>{text}</Text>
  )
}

export default ReusableText

const style = StyleSheet.create({
    textStyles: (family, size, color) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
    })
})