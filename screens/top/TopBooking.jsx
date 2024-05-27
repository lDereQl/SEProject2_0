import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ReusableTile } from '../../components';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';

const TopBooking = () => {
    const hotels =  [
        {
            "_id": "64c674d23cfa5e847bcd5430",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Seaside Resort",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
            "rating": 4.9,
            "review": "1204 Reviews",
            "location": "Miami Beach, FL"
        },
        {
            "_id": "64c675183cfa5e847bcd5433",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Mountain Lodge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
            "rating": 4.5,
            "review": "12024 Reviews",
            "location": "Aspen, CO"
        },
        {
            "_id": "64d0b5a4d3cb4985a76ac1aa",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Hotel Alpha",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "City Center, USA"
        },
    ];

  return (
    <View style={{margin: 20}}>
      <FlatList 
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>(
            <View style={{backgroundColor: COLORS.lightWhite, marginBottom: 10}}>
                <ReusableTile
                    item={item}
                />
                <View style={[reusable.rowWithSpace('space-between'), {margin: 10}]}>
                
                <Button
                  onPress={() => navigation.navigate("SelectedRoom", {item})}
                  title={"Details"}
                  width={(SIZES.width - 50)/2.2}
                  backgroundColor={COLORS.white}
                  borderColor={COLORS.blue}
                  borderWidth={0.5}
                  textColor={COLORS.blue}
                />
                
                <Button
                  onPress={() => navigation.navigate("SelectedRoom", {item})}
                  title={"Cancel"}
                  width={(SIZES.width - 50)/2.2}
                  backgroundColor={COLORS.red}
                  borderColor={COLORS.red}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
              </View>
            </View>
        )}
      />
    </View>
  )
}

export default TopBooking

const styles = StyleSheet.create({})