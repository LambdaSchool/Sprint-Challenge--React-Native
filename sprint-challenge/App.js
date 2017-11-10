import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Breeds, SubBreeds } from './Components';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
        style={styles.button}
        onPress={() => {this.props.navigation.navigate('Breeds')}}>
          <Text style={styles.buttonText}>View all Dog Breeds</Text>
        </TouchableHighlight>
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
  button: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24
  }
});

const Routes = StackNavigator({
  Home: {screen: Home},
  Breeds: {screen: Breeds},
  SubBreeds: {screen: SubBreeds}
});

export default Routes;