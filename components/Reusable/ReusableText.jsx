import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const ReusableText = ({text, family, size, color, align}) => {
  return (
    <Text style={style.textStyles(family, size, color, align)}>{text}</Text>
  )
}

export default ReusableText

const style = StyleSheet.create({
    textStyles: (family, size, color, align) => ({
        fontFamily: family,
        fontSize: size,
        color: color,
        textAlign: align
    })
})