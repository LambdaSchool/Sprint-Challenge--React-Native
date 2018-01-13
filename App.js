import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DogList from './DogList';
import BreedList from './BreedList'
import styles from './Styles';
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to your Dog List</Text>
        <Button
          title="Dog List"
          onPress={() => {
            this.props.navigation.navigate('DogList');
          }}
        />
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  DogList: {screen: DogList},
  BreedList: { screen: BreedList }
});

export default Routes;
