import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RegisterTransactions from './pages/RegisterTransactions';
import HamburguerMenu from './pages/HamburguerMenu';
import Filter from './pages/Filter';
import FilterBoxInfo from './pages/FilterBoxInfo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Dashboard" component={ Dashboard } />
        <Stack.Screen name="RegisterTransactions" component={ RegisterTransactions } />
        <Stack.Screen name="HamburguerMenu" component={ HamburguerMenu } />
        <Stack.Screen name="Filter" component={ Filter } />
        <Stack.Screen name="FilterBoxInfo" component={ FilterBoxInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  