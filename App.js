import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/routers/RootRoute';
import {GlobalProvider} from './store/store';
const App = () => {
  return (
    <GlobalProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </GlobalProvider>
  );
};

export default App;
