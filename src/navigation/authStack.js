import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';
import Welcome from '../screens/authScreens/Welcome';
import SignIn from '../screens/authScreens/SignIn';
import bottomNavigator from './bottomTabs';
import MapScreen from '../screens/mapScreen';

const Auth = createNativeStackNavigator();

const authStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="bottomNavigator"
        component={bottomNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
};

export default authStack;
