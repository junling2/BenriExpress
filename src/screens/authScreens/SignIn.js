/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from 'react-native-elements';

const SignIn = () => {
  const [input2Focus, setInput2Focus] = useState(false);

  const input1 = useRef(1);
  const input2 = useRef(2);

  return (
    <View style={styles.background}>
      <Header title="Sign In" />

      <View style={{marginVertical: 20}}>
        <Text style={styles.text1}>Please enter email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View>
        <View style={styles.input}>
          <Icon name="email" iconStyle={styles.icon} type="material" />
          <TextInput
            style={styles.placeholder}
            placeholder="Email"
            ref={input1}
          />
        </View>
        <View style={styles.input}>
          <Icon name="lock" iconStyle={styles.icon} type="material" />
          <TextInput
            style={styles.placeholder}
            placeholder="Password"
            ref={input2}
            onFocus={() => {
              setInput2Focus(true);
            }}
            onBlur={() => {
              setInput2Focus(false);
            }}
          />
          <Animatable.View
            animation={input2Focus ? 'fadeInRight' : 'fadeOutRight'}
            duration={300}
            easing="ease-in">
            <Icon
              name="visibility-off"
              iconStyle={styles.icon}
              type="material"
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{marginVertical: 5}}>
        <Button
          title="Sign In"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password?
        </Text>
      </View>

      <View style={styles.divider}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center', fontSize: 16}}>OR</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View>
        <SocialIcon
          title="Continue with Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>
      <View>
        <SocialIcon
          title="Continue with Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginVertical: 10}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Create new account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    color: colors.primary,
  },

  text1: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
  },

  input: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 15,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: 'grey',
  },

  placeholder: {
    width: '80%',
    marginLeft: 8,
  },

  button: {
    borderRadius: 40,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 40,
    backgroundColor: colors.secondary,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primary,
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
  },

  SocialIcon: {
    marginHorizontal: 40,
    borderRadius: 40,
  },
});

export default SignIn;
