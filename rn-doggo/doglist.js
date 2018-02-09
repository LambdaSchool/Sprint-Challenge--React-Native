import React from "react";
import axios from "axios";

import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBreeds: []
    };
  }
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        this.setState({
          dogBreeds: response.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> List of Dog Breeds </Text>
        <ScrollView>
          <FlatList
            data={Object.keys(this.state.dogBreeds)}
            renderItem={({ item }) => (
              <View>
                <Text key={item}>{item}</Text>
              </View>
            )}
          />
        </ScrollView>
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
