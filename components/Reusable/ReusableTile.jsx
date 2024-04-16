import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import NetworkImage from './NetworkImage'
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
import HeightSpacer from './HeightSpacer'

const ReusableTile = ({item}) => {
  return (
    <TouchableOPacity style = {style.container}>
        <View style={reusable.rowWithSpace('flex-start')}>
            <NetworkImage 
                source={item.imageUrl}
                width={80}
                height={80}
                radius={12}
            />

            <WidthSpacer width={15}/>

            <View>
            <ReusableText
              text={item.title}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={8}/>

            <ReusableText
              text={item.title}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            </View>
        </View>
    </TouchableOPacity>
  )
}

export default ReusableTile

const style = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    }
})