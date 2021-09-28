import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import SignIn from './src/screens/authScreens/SignIn';
import Welcome from './src/screens/authScreens/Welcome';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <Welcome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
