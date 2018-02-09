import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Breeds from './components/Breeds';
import Voting from './components/Voting';

const Home = props => {
  return (
    <View style={container}>
      <Text>Welcome to Puppy v. Puppy</Text>
      <Text>It's Sort of Like Tinder, But You Vote on Cute Doggos</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('breeds')}>
        <Text>See All Dog Breeds</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('voting')}>
        <Text>Vote On Cute Doggos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const { container } = styles;

const Routes = StackNavigator({
  home: { screen: Home },
  breeds: { screen: Breeds },
  voting: { screen: Voting },
})
export default Routes;