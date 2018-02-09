import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dogs from './components/dogs/Dogs';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Animals</Text>
        <Button
          title={'Dogs'}
          onPress={() => {
            this.props.navigation.navigate('Dogs');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Routes = StackNavigator({
  Home: { screen: Home },
  Dogs: { screen: Dogs }
});

export default Routes;
