import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetImage, HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <HeightSpacer height={60}/>

            <AssetImage 
                data={require('../assets/images/logo.png')}
                width={'100%'}
                height={250}
                mode={"contain"} 
            />

            <View style={{height: 600}}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarLabelStyle: { fontSize: 16, fontFamily: "medium" },
                        tabBarIndicatorStyle: {backgroundColor: COLORS.blue},
                        tabBarActiveTintColor: COLORS.black, 
                        tabBarInactiveTintColor: COLORS.gray,
                    }}>
                    <Tab.Screen name="Signin" component={Signin} />
                    <Tab.Screen name="Registration" component={Registration} />
                </Tab.Navigator>
            </View>
        </ScrollView>
    </View>
  )
}

export default AuthTopTab