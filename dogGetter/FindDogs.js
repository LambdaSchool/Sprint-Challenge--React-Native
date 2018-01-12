import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

import styles from './Styles';

class FindDogs extends Component {

  getDogs = () => {
      axios.get('https://dog.ceo/api/breeds/list/all ')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
  }
    

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>This is will get you ALL the Puppies!</Text>
        <View style={styles.button}>
          <Button
            onPress={this.getDogs}
            title="Puppy Power!"
            color="#ffa500"
          />
        </View>
      </View>
    );
  }
}

FindDogs.propTypes = {};

export default FindDogs