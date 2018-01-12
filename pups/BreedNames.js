import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const axios = require('axios');
import styles from './Styles';

export default class BreedNames extends React.Component {
  state = {
    breedNames: [],
  };

  componentDidMount() {
    console.log('Breed is Mounted');
    let item = this.props.navigation.state;
    let itema = item.params.item;
    const breedNames = this.state.breedNames;
    axios
      .get(`https://dog.ceo/api/breed/${itema}/list`, {})
      .then(response => {
        this.setState(prevState => {
          let { breedNames } = prevState;
          return {
            breedNames: response.data.message,
          };
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    console.log('Breed is Un Mounted');
  }

  render() {
    const thing = this.state.breedNames;
    const thingOne = this.state.breedNames;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={thingOne}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.listCont}>
                <Text style={styles.textItem}>{item}</Text>
              </View>
              <View style={styles.hr} />
            </View>
          )}
        />
      </View>
    );
  }
}
