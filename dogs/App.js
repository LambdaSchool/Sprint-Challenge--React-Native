import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import StatusBarComponent from './app/components/StatusBarComponent/StatusBarComponent';
import DogsComponent from './app/components/DogsComponent/DogsComponent';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBarComponent />
        <DogsComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('App', () => App);
