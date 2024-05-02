import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NetworkImage, { HeightSpacer } from '../../index'

const HotelCard = ({item, margin}) => {
  return (
    <TouchableOpacity style={styles.card(margin)}>
        <View>
            <View style={styles.imageContainer}>
                <NetworkImage
                    source={item.imageURL}
                    width={'90%'}
                    height={'100%'}
                    radius={16}
                />
            </View>
            
            <HeightSpacer height={5}/>

            <View style={{padding: 10}}>

            </View>
        </View>
    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) =>({
        width: SIZES.width/2.2,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        margin: margin
    }),
    imageContainer:{
        allignItems: "center",
        marginTop: 10,
        height: 150
    }
})