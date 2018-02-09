import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import DogBreeds from './DogBreeds';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { navigate }  = this.props.navigation;
    return (
      <View style={container}>
        <Text style={homeHeader}>This is a list of Dog Breeds</Text>
        <View style={buttonWrapper}>
          <Button title="Get Dog Breeds" onPress={() => navigate('DogBreeds')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeHeader: {
    fontSize: 25,
    color: 'white'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const { container, homeHeader, buttonWrapper } = styles;

const Routes = StackNavigator({
  Home: { 
    screen: Home 
  },
  DogBreeds: {
    screen: DogBreeds,
  }
});

export default Routes;
