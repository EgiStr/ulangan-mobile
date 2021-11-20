import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

const SettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color:"black"}}>Settings</Text>
    </View>
  );
};


const SettingStack = createStackNavigator();
export default function SettingsStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingsScreen} />
    </SettingStack.Navigator>
  );
}
