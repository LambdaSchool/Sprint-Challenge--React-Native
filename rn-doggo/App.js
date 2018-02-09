import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Breeds from './components/Breeds'
import Subbreeds from './components/Subbreeds'
import { StackNavigator } from 'react-navigation'

class Home extends React.Component {
  render() {
    return (
      <View style={container}>
        <TouchableOpacity style={button} onPress={() => this.props.navigation.navigate('Breeds')}>
            <Text style={buttonText}>Start</Text>
        </TouchableOpacity>
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
  button: {
    flex:0,
    width: '45%',
    height:50,
    backgroundColor: '#e50914',
    alignItems: 'center',
    justifyContent: 'center',
},
buttonText :{
    color:'white',
    fontSize:18
},
});
const {button, buttonText, container} = styles

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Breeds: {
   screen: Breeds
 },
 Subbreeds:{
  screen: Subbreeds
 }
 })