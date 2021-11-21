/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

const HomeHeader = ({navigation}) => {
  const Cart = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View style={{...styles.container, marginLeft: 15}}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.primary}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>BenriExpress</Text>
      </View>

      <View style={{...styles.container, marginRight: 15}}>
        <Cart
          type="material-community"
          name="cart"
          size={32}
          color={colors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
    height: parameters.headerHeight,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
