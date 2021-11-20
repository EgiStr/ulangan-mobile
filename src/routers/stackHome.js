import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Ulangan from '../screens/ulangan';

export default function StackHome() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{title: 'hello world', headerShown: false}}
      />
      <Stack.Screen name="Ulangan" component={Ulangan} />
    </Stack.Navigator>
  );
}
