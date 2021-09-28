/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {colors} from '../../global/styles';
import logo from '../../images/logo.png';
import welcomeImage from '../../images/welcomeImage.png';

const Welcome = () => {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.text}>Discover Restaurants</Text>
        <Text style={styles.text}>In Your Area</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={welcomeImage} style={styles.image} />
      </View>

      <View>
        <View style={{marginTop: 25}}>
          <Button
            title="Sign In"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            title="Create Account"
            buttonStyle={{
              ...styles.button,
              backgroundColor: 'transparent',
            }}
            titleStyle={{...styles.buttonText, color: 'steelblue'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#87cefa',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35%',
    width: '100%',
    marginTop: 30,
  },
  logo: {
    height: '60%',
    width: '70%',
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '50%',
    marginBottom: 10,
  },

  button: {
    borderRadius: 40,
    borderWidth: 1,
    height: 50,
    width: '100%',
    backgroundColor: colors.secondary,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primary,
  },
});

export default Welcome;
