/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          rounded
          icon={{
            name: 'account',
            type: 'material-community',
            color: 'grey',
            size: 30,
          }}
          overlayContainerStyle={{backgroundColor: 'lightgrey'}}
        />
        <Text style={styles.text}>Junling Qu</Text>
      </View>
      <View style={styles.shadow} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={size}
            />
          )}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 12,
    marginVertical: 10,
  },
  text: {
    marginLeft: 20,
    fontSize: 18,
  },
  shadow: {
    height: 1,
    backgroundColor: 'grey',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default DrawerContent;
