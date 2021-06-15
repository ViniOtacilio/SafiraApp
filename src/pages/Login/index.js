/*import React from 'react';
import { Container } from './styles';
import {  StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <Container style={styles.container}>
      <Text>Safira</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4181ba',
      alignItems: 'center',
      justifyContent: 'center',
    },
});*/

import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// import { Container } from './styles';

export default function Login() {
    return (
      <View style={styles.container}>
        <Text>Safira</Text>
        <StatusBar style="auto" />
      </View>
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4181ba',
      alignItems: 'center',
      justifyContent: 'center',
    },
});