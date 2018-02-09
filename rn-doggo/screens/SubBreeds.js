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

  constructor(props) {
    super(props);

    this.state = {
      breed: props.navigation.state.params.breed,
      breedImage: null,
      subBreeds: null
    };

  }

  

  componentDidMount() {

    const { breed } = this.props.navigation.state.params;

    const api = `https://dog.ceo/api/breed/${ breed }`;

    axios
      .get(`${ api }/images/random`)
      .then((response) => {
        
        const breedImage = response.data.message;

        this.setState({
          breed,
          breedImage,
        });
        
      })
      .catch((error) => console.log(error));
        
    axios
      .get(`${ api }/list`)
      .then((response) => {

        const subBreeds = response.data.message;
        
        this.setState({
          subBreeds,
        });

      })
      .catch((error) => console.log(error));
      
  }

  render() {
    
    console.log(this.state)

    return (
      <View style={styles.container}>
      
        <Image source={{ uri: this.state.breedImage }} />

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

export default SubBreeds;
