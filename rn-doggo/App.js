import React from "react";
import { StackNavigator } from "react-navigation";

import { StyleSheet, Text, View, Button } from "react-native";

import DogList from "./doglist";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Doggie App </Text>
        <Button
          title={"Dog List"}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Routes = StackNavigator({
  Home: { screen: Home },
  DogList: { screen: DogList }
});
export default Routes;
