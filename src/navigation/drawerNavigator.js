import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import bottomNavigator from './bottomTabs';
import {Icon} from 'react-native-elements';
import payment from '../screens/drawerScreens/payment';
import promotions from '../screens/drawerScreens/promotions';
import settings from '../screens/drawerScreens/settings';
import help from '../screens/drawerScreens/help';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        header: () => {
          return null;
        },
      }}>
      <Drawer.Screen
        name="bottomNavigator"
        component={bottomNavigator}
        options={{
          title: 'Restaurants',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="silverware-fork-knife"
              color={focused ? '#7cc' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="payment"
        component={payment}
        options={{
          title: 'Wallet',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={focused ? '#7cc' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="promotions"
        component={promotions}
        options={{
          title: 'Promotions',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="tag"
              color={focused ? '#7cc' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        component={settings}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="cog"
              color={focused ? '#7cc' : 'grey'}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        component={help}
        options={{
          title: 'Help',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={focused ? '#7cc' : 'grey'}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
