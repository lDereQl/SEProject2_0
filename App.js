// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrScreen} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions = {{headerShown: false}}>
        <Stack.Screen name = "Bottom" component = {BottomTabNavigation} />
        <Stack.Screen name = "Login" component = {LoginScreen} />
        <Stack.Screen name = "Register" component = {RegistrScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;