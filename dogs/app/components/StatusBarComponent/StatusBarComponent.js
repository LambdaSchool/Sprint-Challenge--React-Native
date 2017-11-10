import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Platform } from 'react-native';

export default class StatusBarComponent extends Component {
  render() {
    return <View style={[styles.StatusBarComponent, this.props.style || {}]} />;
  }
}

const styles = StyleSheet.create({
  StatusBarComponent: {
    height: Platform.OS === 'ios' ? 35 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('StatusBarComponent', () => StatusBarComponent);