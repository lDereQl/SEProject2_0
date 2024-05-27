import { View, Image, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBooking, TopTrips, TopInfo } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { HeightSpacer, NetworkImage, AppBar, ReusableText } from '../components';
import styles from './topTab.style';

const Tab = createMaterialTopTabNavigator();

const TopTap = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{backgroundColor: COLORS.lightWhite}}>
            <View>
                <NetworkImage
                    source={'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg'}
                    width={'100%'}
                    height={300}
                    radius={0}
                />

                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    icon={'logout'}
                    color1={COLORS.white}
                    onPress1={() => {}}
                />

                <View style={styles.profile}>
                    <Image source={{uri: "https://wallpaperset.com/w/full/d/0/e/541563.jpg"}}
                        style={styles.image}
                    />
                    
                    <HeightSpacer height={5}/>

                    <View style={styles.name}>
                        <View style={{alignItems: "center"}}>
                            <ReusableText 
                                text={"Artem Hroshev"}
                                family={"medium"}
                                size = {SIZES.medium}
                                color={COLORS.black}
                            /> 
                        </View>
                    </View>

                    <HeightSpacer height={5}/>

                    <View style={{alignItems: "center"}}>
                    <ReusableText 
                        text={"blablabla@gmail.com"}
                        family={"medium"}
                        size = {SIZES.medium}
                        color={COLORS.white}
                    /> 
                    </View>
                </View>
            </View>
        </View>
      <Tab.Navigator>
        <Tab.Screen name='Booking' component={TopBooking}/>
        <Tab.Screen name='Trips' component={TopTrips}/>
        <Tab.Screen name='Info' component={TopInfo}/>
      </Tab.Navigator>
    </View>
  )
}

export default TopTap