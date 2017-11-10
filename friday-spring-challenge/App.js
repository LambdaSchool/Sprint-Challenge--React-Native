import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import { RootNavigator } from './navigator';
import { SubBreedsScreen } from './screens/subbreeds';
import { HomeScreen } from './screens/home';

export default class App extends React.Component {
  render() {
    return (
        <RootNavigator />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickable: {
    backgroundColor: 'green'
  }
});
