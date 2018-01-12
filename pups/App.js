import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Styles';
import Dogs from './Dogs';
import BreedNames from './BreedNames';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Complete List of Dog Breeds</Text>
        <Button
          title="Get Started"
          onPress={() => {
            this.props.navigation.navigate('Dogs');
          }}
        />
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs },
  BreedNames: { screen: BreedNames },
});

export default Routes;
