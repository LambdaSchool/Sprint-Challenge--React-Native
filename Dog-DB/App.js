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
  constructor(props) {
    super(props);
      this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      this.setState(prevState => {
        let dogsArr = [];
        Object.keys(response.data.message).map((currDog) => {
          if (response.data.message[currDog].length > 0) {
            response.data.message[currDog].forEach(subDogBreed => {
              dogsArr.push(currDog + ' : ' + subDogBreed);
            })
          } else {
            dogsArr.push(currDog);
          }
        });
        let dogs = dogsArr;
        return { dogs };
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.dogs}
          renderItem={({ item}) => {
            return (
              <View style={styles.listCont}>
                <Text>{item}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
