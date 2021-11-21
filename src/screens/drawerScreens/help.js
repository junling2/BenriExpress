import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const help = () => {
  return (
    <View style={styles.container}>
      <Text>help</Text>
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

export default help;
