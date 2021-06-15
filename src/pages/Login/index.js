import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Login = () => {
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

export default Login;