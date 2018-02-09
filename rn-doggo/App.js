import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Dogs from './Dogs';

const RootStack = StackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs },
}, {
  initialRouteName: 'Home'
});

export default () => <RootStack />;