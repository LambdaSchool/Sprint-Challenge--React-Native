import React from "react";
import axios from "axios";

import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default class SubBreeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subBreeds: [],

      };
  }
  
  componentDidMount() {
      const breedName = this.props.navigation.state.params
    axios
     .get(`https://dog.ceo/api/breed/${breedName}/list`)
      .then(response => {
        this.setState({
          subBreeds: response.data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.listHeader}> Sub Breeds </Text>
        <ScrollView>
          <FlatList
            data={Object.keys(this.state.subBreeds)}
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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  listHeader: {
    fontSize: 30
  }
});
