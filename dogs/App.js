import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [{key: 1, breed: "test"}, {key: 2, breed: "test2"}],
    };
  }

  componentWillMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        this.setState((state) => {
          const breeds = Object.keys(res.data.message);
          return { breeds };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.breeds);
    return (
      <View style={styles.container}>
        <Text>Dog List</Text>
          {this.state.breeds.map((breed) => {
            return(
              <Text>{breed}</Text>
            );
          })}
        <Text>end of dog list</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
