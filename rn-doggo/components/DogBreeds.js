import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

class DogBreeds extends Component {
  constructor () {
    super();
    this.state = {
      dogBreeds: []
    };
  }

  componentDidMount () {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(({ data }) => {
        this.setState({
          dogBreeds: data.message
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    return (
      <View>
        <FlatList
          data={this.state.dogBreeds}
          extraData={thi.state}
          keyExtractor={({ item, index }) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View key={item.key} id={index}>
                {item}
              </View>
            );
          }}
        />
      </View>
    );
  }
}
