import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { 
  NetworkImage, 
  AppBar, 
  ReusableText, 
  HeightSpacer, 
  DescriptionText, 
  HotelMap, 
  ReviewsList
} from '../../components' 
import styles from "./hotelDetails.style"
import reusable from '../../components/Reusable/reusable.style'
import { Rating } from 'react-native-stock-star-rating'
import { Feather } from '@expo/vector-icons'

const HotelDetails = ({navigation}) => {
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194,
    },
    "price": 400,
    "facilities": [
        {
            "wifi": true,
            "_id": "64c675793cfa5e847bcd5437"
        }
    ],
    "__v": 1,
    "reviews":[
      {
        " _id": "64d38ff59af9119acfab@ece",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Inmolestiae quas vel sint commod",
        "rating": 4.6,
        "user": {
          " _id": "64c5d95adc7efae2a45ec376",
          "username": "John Doe",
          "profile": "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg",
        },
        "updatedAt": "2023-08-09"
      },
      {
        " _id": "64d38ff59af9119acfab@ece",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Inmolestiae quas vel sint commod",
        "rating": 4.6,
        "user": {
          " _id": "64c5d95adc7efae2a45ec376",
          "username": "Zoe Doe",
          "profile": "https://lh3.googleusercontent.com/proxy/mhr931UuskNARHtPRIL93Kuz4BXkb8zoO97skLqeuYUTwbvxXbyXUMGjekSisMxp57jCHzKXFQbaXZkVkz4Fkem_XBPQIQyfmZX1SojBf2KZ7TEys7yxPWefdNeR4L5I_ZSw1swvif8unLE3Pt9pimf1W5R8eVI0tt6k"
        },
        "updatedAt": "2023-08-09"
      }
    ]
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }

  return ( 
    <ScrollView> 
      <View style = {{height: 80}}> 
        <AppBar 
          top = {50} 
          left = {20} 
          right = {20}         
          color = {COLORS.white}
          icon = {"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1 ={() => {}}
        />      
      </View>

      <View>
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

              <View style={reusable.rowWithSpace('space-between')}>
                <Rating
                  maxStars = {5}
                  starts = {hotel.rating}
                  bordered = {false}
                  color = {'#FD9942'}
                />
                <ReusableText 
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size = {SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
        </View>
      </View> 

      <View style={[styles.container, {paddingTop: 90}]}>
        <ReusableText
          text={"Description"}
          family={"medium"}
          size = {SIZES.large}
          color={COLORS.black}
        />

        <HeightSpacer height={10}/>

        <DescriptionText text={hotel.description}/>

        <HeightSpacer height={10}/>

        <ReusableText
          text={"Location"}
          family={"medium"}
          size = {SIZES.large}
          color={COLORS.black}
        />

        <HeightSpacer height={15}/>

        <ReusableText
          text={hotel.location}
          family={"regular"}
          size = {SIZES.small+2}
          color={COLORS.gray}
        />
        
        <HotelMap
          coordinates={coordinates}
        />

        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={"Reviews"}
            family={"medium"}
            size = {SIZES.large}
            color={COLORS.black}
          />

          <TouchableOpacity>
            <Feather name='list' size={20}/>
          </TouchableOpacity>
        </View>
        
        <HeightSpacer height={10}/>

        <ReviewsList reviews={hotel.reviews}/>

        </View>
      </View>
    </ScrollView>
   
  )
}

export default HotelDetails