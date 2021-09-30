import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';

const rootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default rootNavigator;
