import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the homepage</Text>
          <Button title='Dog Breeds' onPress={() => this.props.navigation.navigate('DogBreeds')} />
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
  Home: {
    screen: Home
  },
  DogBreeds: {
    screen: DobBreeds
  }
})

export default class App extends React.Component {
  render() {
    return <Routes />
  }
}
