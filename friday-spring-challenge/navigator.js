import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SubBreedsScreen } from './screens/subbreeds';
import { HomeScreen } from './screens/home';

export const RootNavigator = StackNavigator({
  Home: {
      screen: HomeScreen
    },
  SubBreeds: {
      screen: SubBreedsScreen
    }
});
