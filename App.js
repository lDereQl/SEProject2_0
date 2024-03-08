// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/view/screens/HomeScreen';
import LoginScreen from './src/view/screens/LoginScreen';
import RegistrScreen from './src/view/screens/RegistrScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "RegistrScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrScreen" component={RegistrScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;