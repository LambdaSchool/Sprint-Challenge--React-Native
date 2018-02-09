import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './Home';
import Dogs from './Dogs';
import SubBreeds from './SubBreeds';

const RootStack = StackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs },
  SubBreeds: { screen: SubBreeds },
}, {
  initialRouteName: 'Home'
});

export default () => <RootStack />;