import React from "react";
import axios from "axios";

import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBreeds: [],
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
        <Text style={styles.listHeader}>Dog Breeds: A List </Text>
        <ScrollView>
          <FlatList
            data={Object.keys(this.state.dogBreeds)}
            renderItem={({ item }) => (
              <View>
                <Text key={item}
                onPress={() => {
                    this.props.navigation.navigate("SubBreeds");
                }}>
                {item}</Text>
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
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  listHeader: {
      fontSize:30
  }
});
