import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Dogs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Dog Show</Text>

        <Text></Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
});
