import React from 'react';
import axios from 'axios';
import { Text, View, Button, FlatList } from 'react-native';

import styles from './Styles';

export default class App extends React.Component {
  state = {
    breeds: {},
    error: ''
  };

  componentDidMount() {
    axios
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      this.state.breeds = response.data.message;
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Whole lotta dogs</Text>
        <FlatList
          style={styles.list}
          data={Object.keys(this.state.breeds)}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.listCont}>
                  <Text style={styles.textItem}>{item}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}


