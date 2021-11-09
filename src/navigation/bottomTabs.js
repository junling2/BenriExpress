import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import {colors} from '../global/styles';
import searchScreen from '../screens/searchScreen';
import ordersScreen from '../screens/ordersScreen';
import accountScreen from '../screens/accountScreen';

const bottomTabs = createBottomTabNavigator();

const bottomNavigator = () => {
  return (
    <bottomTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarShowLabel: false,
        header: () => {
          return null;
        },
      }}>
      <bottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <bottomTabs.Screen
        name="SearchScreen"
        component={searchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <bottomTabs.Screen
        name="OrdersScreen"
        component={ordersScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="bookmark-outline"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <bottomTabs.Screen
        name="AccountScreen"
        component={accountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </bottomTabs.Navigator>
  );
};

export default bottomNavigator;
