import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';

import axios from 'axios';

export default class Breeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: {}
    }
    this.pressBreedButton = this.pressBreedButton.bind(this);
  }

  pressBreedButton(data) {
    this.props.navigation.navigate('SubBreeds', {
      subBreeds: data
    });
  }

  componentDidMount() {
    // console.log(this.props.navigation);

    const url = `https://dog.ceo/api/breeds/list/all`;
    axios.get(url)
      .then((response) => {
        const body = response.data;

        if (body.status === 'success') {
          this.setState({
            breeds: body.message
          });
        } else {
          console.log('Request failed');
        }
      })
      .catch((error) => {
        console.log('Request error', error.message);
      });
  }

  _createData(arr) {
    const result = [];
    let counter = 0;
    for (const value of arr) {
      result.push({
        key: counter,
        breed: value
      });
      counter++;
    }
    return result;
  }

  render() {
    return (
      <FlatList style={styles.list}
        data={this._createData(Object.keys(this.state.breeds))}
        renderItem={({item}) => <Button style={styles.button} title={`${item.breed} (${this.state.breeds[item.breed].length})`} onPress={() => this.pressBreedButton(this.state.breeds[item.breed])}></Button>}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
  button: {
    height: 40,
    width: '100%',
    backgroundColor: 'powderblue'
  }
});
