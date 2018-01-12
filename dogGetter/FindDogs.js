import React, { Component } from 'react';
import { Text,
         View, 
         Button,
         FlatList
       } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'

import styles from './Styles';

class FindDogs extends Component {
    state = {
        breeds: [],
    }


  getDogs = () => {
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
            const Breeds = res.data.message
            this.setState({breeds: Breeds})
            })
            console.log(this.state)

        .catch((err) => {
            console.log(err)
        });
  }
    

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>This is will get you ALL the Puppies!</Text>
        <View style={styles.button}>
          <Button
            onPress={this.getDogs}
            title="Puppy Power!"
            color="#ffa500"
          />
        </View>
        {/* <View>
            <FlatList
              style={styles.list}
              data={this.state.breeds}
              renderItem={({ breed, index}) => {
                  return (
                      <View>
                          <View style={styles.listed}>
                            <Text style={ styles.listItem }>
                            {breed.text}
                            </Text>
                          </View>
                      </View>
                  );
              }}
            />
        </View> */}
      </View>
    );
  }
}

FindDogs.propTypes = {};

export default FindDogs