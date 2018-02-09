import React, {Component} from 'react';
import { StyleSheet, Text, View, Flatlist, Button, FlatList } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

const url = 'https://dog.ceo/api/breeds/list/all';

class Breeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
  }

  // I know I need to use promises here to capture the GET route to my const'd url variable..but how??   :)  

  render() {
    return(
      <FlatList 
        // I simply cannot remember the code for this, and I haven't completed enough code to reference old work.
      />
    )
  }
}

export default Breeds;