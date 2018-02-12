import React from "react";
import { StyleSheet, Text, View, Button, Image, AsyncStorage, FlatList } from "react-native";

export default class SubBreeds extends React.Component {
  state = {
    subBreeds: []
  }

  async componentDidMount() {
    const subBreeds = JSON.parse((await AsyncStorage.getItem("subBreeds")));
    this.setState({subBreeds});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.subBreeds}
          renderItem={({ item }) => {
            return <Text>{item.subBreed}</Text>;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
