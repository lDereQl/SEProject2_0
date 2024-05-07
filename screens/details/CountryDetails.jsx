import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from "react-native-safe-area-context";
import { NetworkImage, AppBar, HeightSpacer, ReusableText } from '../../components/index'

const CountryDetails = ({navigation}) => {

    const route = useRoute();
    const {item} = route.params;
    console.log(item);
    
  return (
    <SafeAreaView styles = {styles.container}>
    <ScrollView>
    <View>
      <NetworkImage />
      source={}
      width={"100"}
      height={350}
      radius= {30}
    


    <AppBar
    title = {country.country}
    color = {COLORS.white}
    icon = {"search1"}
    color1 = {COLORS.white}
    onPress = {() => navigation.goBack()}
    onPress1 = {() => {}}
    />
    </View>
    <View style = {styles.description}/>
    <ReusableText
     text = {country.region}
     family = {"medium"}
     size = {Text.xLarge}
     color = {COLORS.black}
     />

     <DescriptionText   text={country.description} />

      <View style = {{ alignContent: "center" }}></View>
       <View>
       <View style={reusable.rowWithSpace("space-between")}>
      <ReusableText
           text = {"Popular Destinations"}
           family = {"medium"}
           size = {Text.xLarge}
           color = {COLORS.black}
      />

      <TouchableOpacity onPress={() => {}}>
      <Feather
      name = "list"
      size = {20}
      />
      </TouchableOpacity>

      <ReusableBtn
      onPress={() => navigation.navigate("HotelSearch")}
      btnText ={"Find Best Hotels"}
      width={(SIZES.width - 40)}
      backgroundColor={COLORS.green}
      borderWidth={0}
      textColor = {COLORS.white}
      />

      </View>
      </View>
      </ScrollView>
      </SafeAreaView>
  )
};

export default CountryDetails //please help fix this closing statement

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DescriptionText = () => {
    return (
        <View style={descriptionTextStyles.description}>
            <Text style={descriptionTextStyles.text}>Description Text</Text>
        </View>
    );
};

const descriptionTextStyles = StyleSheet.create({
    description: {
        paddingVertical: 10,
        fontFamily: "regular",
        textAlign: "justify",
        fontSize: 16
    },
    text: {
    }
});

export default DescriptionText //please fix this closing statment 