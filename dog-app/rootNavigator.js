import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; 


// import BreedScreen from './breed.js'
import HomeScreen from './home.js'


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  // Breed: {
  //   screen: BreedScreen,
  //   navigationOptions: {
  //     headerTitle: 'Breed',
  //   },
  // }
});

export default RootNavigator;