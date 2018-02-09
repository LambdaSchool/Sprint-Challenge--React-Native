import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Breed from './components/Breed';

export default class Dogs extends Component {

  static navigationOptions = {
    title: 'Dogs'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Dog Show</Text>
        <Text>Please select a breed of your choice</Text>
        <Button
          title={'Breed'}
          onPress={() => {
            this.props.navigation.navigate('Breed')
          }}
        />
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

  const Routes = StackNavigator({
    Dogs: { screen: Dogs },
    Breed: { screen: Breed },
  })

  export default Routes;
