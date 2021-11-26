import React, {useState, useEffect} from 'react';
import getCredentials from '../helpers/setCredentials';
import StackAuth from './StackAuth';
import TabsScreen from './tabNavigation';

const RootStackScreen = async () => {
  const [isLogin, setIsLogin] = useState(null);
  const checkToken = async () => {
    try {
      const token = await getCredentials()
      if (token) {
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <RootStack.Navigator headerMode="none" >
      {isLogin ? (
        <RootStack.Screen name={'Home'} component={TabsScreen} />
      ) : (
        <RootStack.Screen
          name={'Welcome'}
          component={StackAuth}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen