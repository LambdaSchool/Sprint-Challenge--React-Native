import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { BreedList, SubBreedList } from './Components';

//I tired to make the names as easy to follow as possible.  This definitely was a challenge! 
//There's only so many ways you can say, "dog breed" and 'sub dog breed" before you just 
//give up and say, "breed" lol.

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => {this.props.navigation.navigate('BreedList')}}>
          <Text style={styles.buttonText}>Touch to view all dog breeds</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22
  }
});

const Routes = StackNavigator({
  Home: {screen: Home},
  BreedList: {screen: BreedList},
  SubBreedList: {screen: SubBreedList}
});

export default Routes; 