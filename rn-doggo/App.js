import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Breeds from './components/Breeds';
import SubBreeds from './components/SubBreeds';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Breeds /> */}
        <Text>Hello</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const Routes = StackNavigator({
  App: { screen: App },
  Breeds: { screen: Breeds }
});

export default Routes;
