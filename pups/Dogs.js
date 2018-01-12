import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import BreedNames from './BreedNames';
const axios = require('axios');
import styles from './Styles';

export default class Dogs extends React.Component {
  state = {
    dogs: [],
  };

  componentDidMount() {
    console.log('Dogs.js is Mounted');
    const dogs = this.state.dogs;
    axios
      .get('https://dog.ceo/api/breeds/list/all', {})
      .then(response => {
        this.setState(prevState => {
          let { dogs } = prevState;
          return {
            dogs: response.data.message,
          };
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    console.log('Dogs.js is Un Mounted');
  }

  render() {
    const goToNextScreen = item => {
      const { navigate } = this.props.navigation;
      this.props.navigation.navigate('BreedNames', {
        item: item,
      });
    };
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={Object.keys(this.state.dogs)}
          renderItem={({ item, index }) => (
            <View>
              <TouchableHighlight onPress={() => goToNextScreen(item)}>
                <View style={styles.listCont}>
                  <Text style={styles.textItem}>{item}</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.hr} />
            </View>
          )}
        />
      </View>
    );
  }
}
