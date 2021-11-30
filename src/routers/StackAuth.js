import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/registerScreen';
import WelcomeScreen from '../screens/WelcomeScreen.js';
export default function StackAuth(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator {...props}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
