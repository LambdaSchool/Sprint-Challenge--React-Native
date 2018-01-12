import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';

import styles from './Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBreeds: {}
    }
  }

  componentDidMount() {
    console.log('componentDidMount Message');
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        this.state.dogBreeds = res.data.message;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={Object.keys(this.state.dogBreeds)}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{ item }</Text>
                <Text>{ item.dogBreeds }</Text>
              </View>
            )
          }}
        />
      </View>
    );
  }
}
