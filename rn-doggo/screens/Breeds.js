import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import axios from 'axios';

class Breeds extends Component {

  state = {
    dogs: {}
  }

  showSubBreeds = (breed) => {

    const { navigate } = this.props.navigation;

    navigate('SubBreeds', { breed });

  }

  componentDidMount() {

    const endpont = 'https://dog.ceo/api/breeds/list/all';

    axios
      .get(endpont)
      .then((response) => {

        const dogs = response.data.message;
        
        this.setState({
          dogs,
        });

      })
      .catch((error) => console.log(error));

  }

  render() {
    
    const breeds = Object.keys(this.state.dogs);

    return (
      <View style={styles.container}>
      
        <FlatList
          data={ breeds }
          keyExtractor={ (item, index) => index }
          renderItem={
            ({ item }) => {
              
              return (
                <TouchableOpacity
                  onPress={ () => this.showSubBreeds(item) }
                  >

                  <Text breed={ item }>{ item }</Text>

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
});

export default Breeds;
