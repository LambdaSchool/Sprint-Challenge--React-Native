import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import axios from 'axios';

export default class BreedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breeds: [] };
  }
  async componentDidMount() {
    try {
      const result = await axios.get('https://dog.ceo/api/breeds/list/all');
      return this.setState({breeds: Object.entries(result.data.message)});
      console.log('breeds', breeds)
    } catch (error) {
      return this.setState({error: 'Error fetching Dog Breed data'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.error ? this.state.error : null}</Text>
        <Text style={styles.List}> Dog Breed List - Touch The Pink Names to See the SubBreed </Text>
        <FlatList 
          keyExtractor={item => item[0]}
          data={this.state.breeds}
          renderItem={({ item }) => {
            return (
              <View style={styles.List}>
                {item[1].length ?
                  <TouchableHighlight onPress={() => {
                    this.props.navigation.navigate('SubBreedList', {subBreeds: item[1]})}} >
                    <Text style={styles.Link}>
                    {/* if you make this {item} it will render the subBreeds as well - found that out the hard way*/}
                      {item[0]} 
                    </Text>
                  </TouchableHighlight> : 
                  <Text style={styles.ListItems}>
                    {item}
                  </Text>
                }
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  List: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Link: {
    color: 'pink',
    fontSize: 22,
  },
  ListItems: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 22
  }
});