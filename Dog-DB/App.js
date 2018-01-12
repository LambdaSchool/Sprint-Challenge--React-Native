import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import styles from './Styles';
const axios = require('axios');

export default class App extends React.Component {
  state = {
    tasks: [],
    error: '',
  };

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      this.setState(prevState => {
        let { tasks } = prevState;
        return {
          tasks: response.data,
        };
      });
    })
    .catch(error => {
      console.log(error);
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
          <View>
            <Text>DOG BREEDS</Text>
            {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}
            <FlatList
              style={styles.list}
              data={this.state.tasks}
              renderItem={({ item, index }) => {
                return (
                  <View key={index}>
                    <View style={styles.listCont}>
                      <Text style={styles.textItem}>{item.email}</Text>
                    </View>
                    <View style={styles.hr} />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
