import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Doggos Galore!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginLeft: 80,
  },

});
