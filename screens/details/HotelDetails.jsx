import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { NetworkImage, AppBar, ReusableText, HeightSpacer } from '../../components' 
import styles from "./hotelDetails.style"
import reusable from '../../components/Reusable/reusable.style'

const HotelDetails = ({navigation}) => {
  return ( 
    <ScrollView> 
      <View style = {{height: 80}}> 
      <AppBar 
        top = {50} 
        left = {20} 
        right = {20} 
        title = {"PlaceDetails.title"}
        color = {COLORS.white}
        icon = {"search1"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1 ={() => {}}
    />      
      </View>


    <View style={styles.container}> 
      <NetworkImage 
      source = {hotel.imageUrl} 
      width={"100%"} 
      height={220}
      radius={25}
      />

      <View style={styles.titleContainer}>
        <View style={styles.titleColumn}> 
          <ReusableText 
          text={hotel.title}
          family={"medium"}
          size = {SIZES.xLarge}
          color={COLORS.black}
          /> 

          <HeightSpacer height={10}/>
          <ReusableText 
          text={hotel.location}
          family={"medium"}
          size = {SIZES.medium}
          color={COLORS.black}
          /> 



        <HeightSpacer height={15}/> 

              <View style={reusable.rowWithSpace('flex-start')}>


              </View>
        </View>
      </View>
    </View> 
    </ScrollView>
   
  )
}

export default HotelDetails