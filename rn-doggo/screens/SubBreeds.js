import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import axios from 'axios';

class SubBreeds extends Component {
  
  state = {
    breed: null,
    breedImage: null,
    subBreeds: null
  };

  componentDidMount() {

    const { breed } = this.props.navigation.state.params;

    const api = `https://dog.ceo/api/breed/${ breed.toLowerCase() }`;

    axios
      .get(`${ api }/images/random`)
      .then((response) => {
        
        const breedImage = response.data.message;
        
        axios
          .get(`${ api }/list`)
          .then((res) => {

            const subBreeds = res.data.message;
            
            this.setState({
              breed,
              breedImage,
              subBreeds,
            });

          })
          .catch((error) => console.log(error));
        
      })
      .catch((error) => console.log(error));

  }

  render() {

    return (
      <View style={styles.container}>
      
        <Image 
          style={ styles.breedImage }
          source={{ uri: this.state.breedImage }}
          />

        <FlatList
          data={ this.state.subBreeds }
          keyExtractor={ (item, index) => index }
          renderItem={
            ({ item }) => {

              const subBreed = item[0].toUpperCase() + item.substr(1);
              
              return (
                <TouchableOpacity
                  style={ styles.listItem }>

                  <Text style={ styles.listItemText }>
                    - { subBreed }
                  </Text>

                </TouchableOpacity>
              );

            }
          }
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
  breedImage: {
    width: '100%',
    height: 250
  },
  listItem: {
    minWidth: '100%',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#eee'
  },
  listItemText: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});

export default SubBreeds;
