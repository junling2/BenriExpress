import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const payment = () => {
  return (
    <View style={styles.container}>
      <Text>payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default payment;
