import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ListScreen from '../screens/List.js';
import SingleScreen from '../screens/Single.js';

const RootNavigator = TabNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      tabBarLabel: 'List',
      headerTitle: 'Breed List',
    },
  },
  CurrentBreed: {
    screen: SingleScreen,
    navigationOptions: {
      tabBarLabel: 'Breed',
      headerTitle: 'Current Breed',
    },
  }
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: '#eee',
    },
    labelStyle: {
      color: '#32162f'
    },
    tabStyle: {
      borderColor: 'red'
    }
  }

});

export default RootNavigator;