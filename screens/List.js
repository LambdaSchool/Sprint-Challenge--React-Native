import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, FlatList } from 'react-native';
import Button from 'react-native-button';
import axios from 'axios'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogBreeds: [],
      dogSubBreeds: {}
    }
    
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then((result) => {
      if (result.data.status === false) throw new Error('result false');
      this.setDogs(result.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  setDogs(dogs) {
    this.setState({ dogBreeds: Object.keys(dogs), dogSubBreeds: dogs });
  }
  
  _makeSubList(subBreeds) {
    return (
      <FlatList
        style={styles.subContainer}
        data={subBreeds}
        keyExtractor={(item, i) => i}
        renderItem={({item}) => <Text style={styles.subBreed}>{item}</Text>}
      />
    )
  }
  
  _makeListItem(breedKey) {
    // ({item}) => <Text style={styles.mainBreed}>{item}</Text>
    if (this.state.dogSubBreeds[breedKey].length === 0) {
      return (<Text style={styles.mainBreed}>{breedKey}</Text>);
    } else {
      return (
        <View>
          <Text style={styles.mainBreed}>{breedKey}</Text>
          <FlatList
            style={styles.subContainer}
            data={this.state.dogSubBreeds[breedKey]}
            keyExtractor={(item, i) => i}
            renderItem={(item) => <Text style={styles.subBreed}>{item}</Text>}
          />
        </View>
      );
    }
  }
  
  render() {
    console.log(this.state);
    return (
      <View style={styles.page}>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
        <Image
          source={require('../assets/icon.png')}
        />
        <FlatList
          style={styles.container}
          data={this.state.dogBreeds}
          keyExtractor={(item, i) => i}
          renderItem={this._makeListItem({item})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0F1F2B',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  container: {
    width: '100%',
    padding: 16
  },
  subContainer: {
    backgroundColor: '#333',
    color: '#eee'
  },
  mainBreed: {
    width: '100%',
    margin: 8,
    padding: 16,
    backgroundColor: '#fefefe',
    color: '#333'
  },
  subBreed: {
    
  }
});