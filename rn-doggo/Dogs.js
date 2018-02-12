import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, AsyncStorage } from 'react-native';
import axios from 'axios';

const api = `https://dog.ceo/api/breeds/list/all`;

export default class Dogs extends React.Component {
  state = {
    dogs: [{
      breed: '',
      subBreeds: '',
      key: '0'
    }],
    error: undefined,
    isFetching: false
  }

  componentDidMount() {
    this.getDogs();
  }

  getDogs = async () => {
    this.setState({isFetching: true});
    try {
      const response = await axios.get(api);
      const data = response.data.message;
      const dogs = Object.keys(data).map((breed, i) => {
        return {
          breed,
          subBreeds: data[breed].map((subBreed, j) => {
            return {
              subBreed,
              key: `${breed}-${subBreed}`
            }
          }),
          key: `breed${i}`
        }
      });
      AsyncStorage.setItem('dogs', JSON.stringify(dogs));
      this.setState({dogs, error: undefined})
    } catch(error) {
      this.setState({dogs: [], error})
    } finally {
      this.setState({isFetching: false});
    }
  }

  renderError = () => <View style={styles.container}><Text>An error occurred.</Text></View>

  renderFetchingSpinner = () => <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
  
  viewSubBreeds = async (subBreeds) => {
    await AsyncStorage.setItem('subBreeds', JSON.stringify(subBreeds));
    this.props.navigation.navigate('SubBreeds');
  }

  renderDogs = (dogs) => (
    <View style={styles.container}>
      <FlatList 
        data={dogs}
        renderItem={({item}) => { 
          if (!item.subBreeds.length) return <Text>{item.breed}</Text>
          return (
            <Text 
              style={{color: 'blue'}} 
              onPress={() => this.viewSubBreeds(item.subBreeds)}
            >{item.breed}
            </Text>
          )
        }}
      />
    </View>
  )

  render() {
    const { dogs, error, isFetching } = this.state;
    if (error) return this.renderError();
    if (isFetching) return this.renderFetchingSpinner();

    return this.renderDogs(dogs);
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
