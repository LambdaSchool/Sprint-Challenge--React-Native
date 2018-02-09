import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';
import index from 'axios';

class Dogs extends Component {
  // set initial state
  state = {
  breeds: []
  }

  // get dog list
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = response.message;
        this.setState({ breeds });
      });
  }

  _keyExtractor = (item, index) => index;
  // move it to Breed.js
  _renderItem = ({ item }) => {
    return (
      <Text >
        {item}
      </Text>
    )
  };


  // show dogs list
  render() {
    return (
      <View>
        <Text>Dogs Breeds</Text>
        <FlatList
          data={this.state.breeds}
          extraData={this.state}  
          keyExtractor={this._keyExtractor}
        renderItem = {this._renderItem}  
          />
      </View>  
    )
  }
}

