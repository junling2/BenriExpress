import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const accountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Account</Text>
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

export default accountScreen;
