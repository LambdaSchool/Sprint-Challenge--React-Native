import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Breed from './components/Breed';
import SubBreed from './components/SubBreed';

class App extends React.Component {
  constructor() {
    super();
  }

  handlePress = () => {
    this.props.navigation.navigate('Breed');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Visit The Breeds of Dogs" onPress={this.handlePress}/>
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
  Home: { screen: App },
  Breed: { screen: Breed },
  SubBreed: { screen: SubBreed }
});

export default Routes;
