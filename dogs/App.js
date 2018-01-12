import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class App extends React.Component {
  state = {
    breeds: {},
    err: ''
  };

  componentDidMount = () => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.state.breeds = res.data.message;
        console.log(res.data.message.bulldog[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.state.breeds)}
          renderItem={({ item }) => {
            return (
              <View>
                <Text key={item}>{item}</Text>
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
    justifyContent: 'center'
  }
});
