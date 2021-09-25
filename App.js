import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Header title="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
