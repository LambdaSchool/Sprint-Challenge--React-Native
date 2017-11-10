import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, FlatList } from 'react-native';
import axios from 'axios';

export default class DogsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    console.log('Did was called');
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const dogs = Object.keys(response.data.message);
        console.log(dogs);
        this.setState({
          dogs: dogs
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dogs}
          renderItem={({ item }) => (
            <View style={styles.dogs}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '25%'
  },
  dogs: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

AppRegistry.registerComponent('DogsComponent', () => DogsComponent);
