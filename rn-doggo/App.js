import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Breeds from './components/Breeds'
import Subbreeds from './components/Subbreeds'
import {StackNavigator} from 'react-navigation'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Breeds />
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


export default StackNavigator({
  App: {
    screen: App,
  },
  Breeds: {
   screen: Breeds
 },
 
})