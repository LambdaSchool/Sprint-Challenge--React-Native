import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from 'react-navigation';

import styles from "./Styles";
import DogList from "./DogList";
import DogSubBreedList from './DogSubBreedList';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's find some dogs!</Text>
        <Button
          title="Show me your dogs"
          onPress={() => {
            this.props.navigation.navigate("DogList");
          }}
        />
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  DogList: { screen: DogList },
  DogSubBreedList: {screen: DogSubBreedList }
});

export default Routes;