import React from 'react';
import axios from 'axios';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';

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
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.state.breeds)}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <Text style={styles.text}>{item}</Text>
                </View>
              </View>
            );
          }}
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
    marginTop: '5%',
    marginBottom: '5%'
  },
  text: {
    fontSize: 20
  }
});
