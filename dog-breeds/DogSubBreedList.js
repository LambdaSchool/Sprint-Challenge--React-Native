import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button
} from "react-native";
import _ from "lodash";
import { StackNavigator } from 'react-navigation';

import axios from "axios";
import styles from "./Styles";

export default class DogSubBreedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {}
    };
  }

  // when the component mounts, make a call to the api to retreive the dogs
  componentDidMount() {
    console.log("dog list mounted");
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res => {
        this.setState({
          dogs: res.data.message
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
          <Text style={styles.header}>Dogs by Breed</Text>
          <FlatList
            keyExtractor={item => item.message}
            style={styles.list}
            data={Object.keys(this.state.dogs)}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <View style={styles.listContainer}>
                    <Text style={styles.textItem}>
                      {_.upperFirst(item.toString())}
                    </Text>
                    
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
