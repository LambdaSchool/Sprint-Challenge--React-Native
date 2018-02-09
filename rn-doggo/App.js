import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View style={container}>
        <Text>Welcome to Puppy v. Puppy</Text>
        <Text>It's Sort of Like Tinder, But You Vote on Cute Doggos</Text>
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
const { container } = styles;

const Routes = StackNavigator({
  home: { screen: Home },
  breeds: { screen: Breeds },
})
export default Routes;