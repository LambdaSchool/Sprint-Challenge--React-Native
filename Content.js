import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class Content extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Content Dog Name Here</Text>
      </View>
    );
  }
}
