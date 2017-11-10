import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  StatusBar
} from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bowwow: {},
    };
  }


  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .done((response) => {
        this.setState({ bowwow: response.data.message });
      })
  }

  render() {
    return (
      <View >
        <FlatList
          data={Object.keys(this.state.bowwow)}
          renderItem={({item}) => this.state.bowwow[item].length > 0 ?
          <Text key={item}>
          {item}
        </Text> 
          : <Text key={item}>{item}</Text>}
        />
      </View>
    );
  }
}