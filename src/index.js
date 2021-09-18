import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RegisterTransactions from './pages/RegisterTransactions';
import HamburguerMenu from './pages/HamburguerMenu';
import Filter from './pages/Filter';
import TransactionDescription from './pages/TransactionDescription';
import ForgetPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ChangePassword';
import ReportsFilter from './pages/ReportsFilter';

const prefix = Linking.makeUrl("/");

const Stack = createStackNavigator();

export default function App() {

  const linking = {
    prefixes: ['safira://'],
    config: {
      screens: {
        ForgetPassword: 'forgetpassword',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="ForgetPassword" component={ ForgetPassword } />
        <Stack.Screen name="Dashboard" component={ Dashboard } />
        <Stack.Screen name="RegisterTransactions" component={ RegisterTransactions } />
        <Stack.Screen name="HamburguerMenu" component={ HamburguerMenu } />
        <Stack.Screen name="Filter" component={ Filter } />
        <Stack.Screen name="TransactionDescription" component={ TransactionDescription } />
        <Stack.Screen name="ReportsFilter" component={ ReportsFilter } />
        <Stack.Screen name="ChangePassword" component={ ChangePassword } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  