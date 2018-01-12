import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  ScrollView
} from "react-native";
import axios from "axios";
import styles from "./Styles";

export default class DogList extends Component {
  state = {
    dogs: [],
    text: "",
    error: ""
  };

  componentDidMount() {
    console.log("dog list mounted");
    const dogs = this.state.dogs;

    const listDogs = axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res => {
        this.setState(prevState => {
          let { dogs } = prevState;
          return {
            dogs: res.data.message
          };
        });
        console.log("dogs in console", this.state.dogs);
      })
      .catch(err => {
        console.log("dog list mounting error", err);
      });
  }

  render() {
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.main}
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <Text style={styles.header}>All Dogs</Text>
          <FlatList
            keyExtractor={item => item.dogs}
            style={styles.list}
            data={this.state.dogs}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <View style={styles.listContainer}>
                    <Text style={styles.textItem}>{item.text}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    );
  }

  // this is the end of the component
}
