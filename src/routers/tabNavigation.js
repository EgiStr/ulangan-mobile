import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from './stackHome';

import CreateScreen from '../screens/create';
import ProfileScreen from '../screens/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalColor} from '../styles/global';

const TabStack = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Create') {
            iconName = 'add';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Search') {
            iconName = 'search';
          }
          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={focused ? globalColor.activeColor : 'gray'}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: globalColor.activeColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <TabStack.Screen name={'Home'} component={StackHome} />
      <TabStack.Screen name={'Create'} component={CreateScreen} />
      <TabStack.Screen name={'Profile'} component={ProfileScreen} />
    </TabStack.Navigator>
  );
};

export default TabsScreen;
