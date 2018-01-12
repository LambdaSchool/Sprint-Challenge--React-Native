import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { BreedList, SubBreedList } from './Components';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => {this.props.navigation.navigate('BreedList')}}>
          <Text style={styles.buttonText}>Touch to View all Dog Breeds</Text>
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