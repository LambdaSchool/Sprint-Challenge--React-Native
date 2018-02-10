import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import SubBreed from './SubBreed';

class Breed extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: null
    };
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.setState(() => {
          return {
            breeds: res.data.message
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.breeds ? 
          <ActivityIndicator size="large" color="#0000ff"/> : 
          <FlatList 
            data={Object.keys(this.state.breeds)}
            keyExtractor={(index) => index}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SubBreed', { sub: this.state.breeds[item]})}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        }
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

export default Breed;
