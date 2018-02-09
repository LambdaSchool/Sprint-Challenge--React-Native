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

    const api = `https://dog.ceo/api/breed/${ breed }`;

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
              
              return (
                <TouchableOpacity
                  // onPress={  }
                  >

                  <Text>{ item }</Text>

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
  }
});

export default SubBreeds;
