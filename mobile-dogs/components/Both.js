import React from 'react';
import axios from 'axios';

import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  SectionList
} from 'react-native';

export default class DogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
  }

  componentDidMount() {
    const url = `https://dog.ceo/api/breeds/list/all`;
    axios.get(url)
      .then((response) => {
        const body = response.data;

        if (body.status === 'success') {
          this.setState({
            breeds: this._toArray(body.message)
          });
        } else {
          console.log('Request failed');
        }
      })
      .catch((error) => {
        console.log('Request error', error.message);
      });
  }

  _toArray(breedsObject) {
    const result = [];
    for (const breed in breedsObject) {
      result.push({
        title: breed,
        data: breedsObject[breed]
      });
    }

    return result;
  }

  render() {
    return (
      <SectionList
        style={styles.sectionList}
        sections={this.state.breeds}
        renderSectionHeader={({section}) =>
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>}
        renderItem={({item}) =>
          <View style={styles.sectionItem}>
            <Text>{item}</Text>
          </View>}>
      </SectionList>
    );
  }
}

const styles = StyleSheet.create({
  sectionList: {
    width: '100%'
  },
  sectionHeader: {
    height: 30,
    width: '100%',
    backgroundColor: 'steelblue'
  },
  sectionItem: {
    height: 20,
    width: '100%',
    backgroundColor: 'powderblue'
  }
});
