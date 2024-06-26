// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, 
         RegistrScreen, 
         Settings, 
         EventDetails, 
         Recommended, 
         PlaceDetails, 
         HotelDetails,
         HotelList,
         HotelSearch,
         SelectRoom,
         Payment
} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';


const Stack = createNativeStackNavigator();

function App() {

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottom" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Bottom" component = {BottomTabNavigation} />
        <Stack.Screen name = "Settings" component = {Settings}/>
        <Stack.Screen name = "EventDetails" component = {EventDetails}/>
        <Stack.Screen name = "Recommended" component = {Recommended}/>
        <Stack.Screen name = "PlaceDetails" component = {PlaceDetails}/>
        <Stack.Screen name = "HotelDetails" component = {HotelDetails}/>
        <Stack.Screen name = "HotelList" component = {HotelList}/>
        <Stack.Screen name = "HotelSearch" component = {HotelSearch}/>
        <Stack.Screen name = "SelectRoom" component = {SelectRoom}/>
        <Stack.Screen name = "Payment" component = {Payment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;