import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';

function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
