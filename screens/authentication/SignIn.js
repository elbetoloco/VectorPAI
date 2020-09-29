/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Alert, Text, ActivityIndicator
} from 'react-native';
import Auth from '@aws-amplify/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  activityIndicator: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default function SignIn({ navigation, signIn: signInCb }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    if (email.length > 4 && password.length > 2) {
      setLoading(true);
      await Auth.signIn(email, password)
        .then((user) => {
          setLoading(false);
          signInCb(user);
        })
        .catch((err) => {
          setLoading(false);
          if (!err.message) {
            console.log('1 Error when signing in: ', err);
            Alert.alert('Error when signing in: ', err);
          } else {
            if (err.code === 'UserNotConfirmedException') {
              console.log('User not confirmed');
              navigation.navigate('Confirmation', {
                email,
              });
            }
            if (err.message) {
              setErrorMessage(err.message);
            }
          }
        });
    } else {
      setErrorMessage('Provide a valid email and password');
    }
  };


  let view = '';

  if (loading) {
    view = (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  }else{
    view = (
      <View style={styles.container}>
      <Input
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        autoCompleteType="email"
        autoCapitalize="none"
        autoFocus
        keyboardType="email-address"
      />
      <Input
        value={password}
        placeholder="password"
        onChange={(text) => onChangePassword(text)}
        secureTextEntry
        autoCompleteType="password"
      />
      <Button
        onPress={() => signIn()}
      >
        Sign In
      </Button>
      <Text>{errorMessage}</Text>
      <Button onPress={() => navigation.navigate('ForgetPassword')}>
        Forget Password
      </Button>
    </View>
    );
  }
  return (
    view
  );
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};
