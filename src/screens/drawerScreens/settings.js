import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const settings = () => {
  return (
    <View style={styles.container}>
      <Text>settings</Text>
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

export default settings;
