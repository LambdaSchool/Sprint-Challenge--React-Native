import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { Home, Breeds, Styles, SubBreeds } from './components';
//'https://dog.ceo/api/breeds/list/all'

export default class app extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

const Routes = StackNavigator({
  Home: {
    screen: Home
  },
  Breeds: {
    screen: Breeds
  },
  SubBreeds: {
    screen: SubBreeds
  }
});