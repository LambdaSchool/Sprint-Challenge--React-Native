import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './Styles';
import FindDogs from './FindDogs';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>I heard you like dogs...</Text>
          <View style={ styles.button }>
          <Button 
            title='Find Dogs'
            color="#ffa500"
            onPress={() => {
              this.props.navigation.navigate('FindDogs')
            }}
          />
          </View>
      </View>
    );
  }
}

const Screens = StackNavigator({
  Home: { screen: Home },
  FindDogs: { screen: FindDogs },
});

export default Screens