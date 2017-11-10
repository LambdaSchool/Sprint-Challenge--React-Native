import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import Both from './components/Both.js';
import Breeds from './components/Breeds.js';
import SubBreeds from './components/SubBreeds.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dog Breeds List App</Text>
        {/* <Both style={styles.breedsList}/> */}
        <Breeds navigation={this.props.navigation} style={styles.breedsList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breedsList: {
    width: '100%'
  }
});

const Routes = StackNavigator({
  Home: {
    screen: App
  },
  SubBreeds: {
    screen: SubBreeds
  },
  Breeds: {
    screen: Breeds
  }
});

export default Routes;
