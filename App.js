import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DogList from './DogList';
import styles from './Styles';
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to your Dog List</Text>
        <DogList />
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  DogList: { screen: DogList }
});

export default Routes;
