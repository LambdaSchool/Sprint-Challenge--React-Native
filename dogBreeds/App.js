import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    breeds: [],
  };
  componentWillMount() {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then((list) => {
        if (list) {
          this.setState((prev) => {
            const breeds = Object.keys(list.data.message)
              .map((breed, i) => ({key: i, breed}));
            return { breeds };
          });
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flexList}
          data={this.state.breeds}
          renderItem={({item}) => <Text>{item.breed}</Text>}
        />
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
