import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ListItem } from 'react-native';
import axios from 'axios';

class DogBreeds extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        console.log(res.data.message);
        this.setState({ dogBreeds: res.data.message });
      })
      .catch(error => {
        console.log('There was an error fetching data', error);
      });
  }

  render() {
    const breeds = Object.keys(this.state.dogBreeds);
    return (
      <View>
        <Text>Dog Breeds</Text>
        <FlatList
          data={breeds}
          renderItem={({ item, index }) => {
            return (
              <View>
                <Text key={item + index}>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default DogBreeds;
