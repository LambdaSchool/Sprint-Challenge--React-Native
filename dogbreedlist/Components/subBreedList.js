import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class SubBreedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breeds: [] };
  }

  componentDidMount() {
    //console.log('this.props', this.props)
    //console.log('this.props.navigation.state', this.props.navigation.state)
    //console.log('this.props.navigation.state.params', this.props.navigation.state.params)
    //console.log('this.subBreeds', this.props.navigation.state.params.subBreeds) //yeah I had to do this to figure out the props....
    //console.log('id', this.props.navigation.state.params.subBreeds.id) //im super amazing like this... go expo....
    const breeds = this.props.navigation.state.params.subBreeds.map((breed, i) => ({id: i, breed: breed}));
    //console.log('breeds', breeds)
    this.setState({breeds});
    //console.log('state', this.state)
  }

  render() {
    return (
      <View style={styles.subBreedListContainer}>
        <FlatList 
          keyExtractor={item => item.id}
          data={this.state.breeds}
          renderItem={({item}) => {
            return (
              <View style={styles.breedListView}> 
                <Text style={styles.breedList}>{item.breed}</Text> 
              </View>
          )}}/>
      </View>
    );
  }
}
