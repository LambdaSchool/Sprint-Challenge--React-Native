import React from "react";
import { StackNavigator } from "react-navigation";

import { StyleSheet, Text, View, Button } from "react-native";

import DogList from "./doglist";
import SubBreeds from "./subbreeds";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Doggie App </Text>
        <Button
          title={"Click to see a List of Dog Breeds"}
          onPress={() => {
            this.props.navigation.navigate("DogList");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize:50
  }
});

const Routes = StackNavigator({
  Home: { screen: Home },
  DogList: { screen: DogList },
  SubBreeds: { screen: SubBreeds},
});
export default Routes;
