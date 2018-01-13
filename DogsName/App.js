import React, { Component }from 'react';
import { Text, View, FlatList } from 'react-native';
import axios from 'axios';

import styles from './Styles';

class App extends Component {
  
  state = {
      breeds: [],
    };

  componentWillMount() {
    axios.get(' https://dog.ceo/api/breeds/list/all')
      .then((list) => {
        if (list) {
          this.setState((prev) => {
            const breeds = Object.keys(list.data.message)
              .map((breed, i) => ({key: i, breed}));
            return { breeds };
          });
        }
      });
  }

  render() {
    return (
     <View style={styles.container}>
      <FlatList
        style={styles.flexList}
        data={this.state.breeds}
        renderItem={({item}) => <Text>{item.breed}</Text>}
      />
     </View>
    );
  }
}

export default App;