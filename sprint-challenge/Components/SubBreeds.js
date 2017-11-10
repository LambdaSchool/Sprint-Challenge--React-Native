import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class Breeds extends React.Component {
  constructor(props) {
    super(props);

    this.state = { breeds: [] };
  }

  componentDidMount() {
    const breeds = this.props.navigation.state.params.subBreeds.map((el, i) => ({id: i, breed: el}));
    this.setState({breeds});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          keyExtractor={item => item.id}
          data={this.state.breeds}
          renderItem={({item}) => {
            return (
              <View style={styles.items}>
                <Text style={{fontSize: 24}}>{item.breed}</Text>
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
  },
  items: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
