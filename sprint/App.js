import React from 'react';
import { StyleSheet, Text, View, FlatList, ListView } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log(123)
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        this.setState({ data: res.data.message });
        console.log(this.state.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  render() {
    const keys = Object.keys(this.state.data)
    return (
      <View style={styles.container}>
        <Text>Dogs</Text>
        <FlatList 
          data={keys}
          renderItem={({ item }) => {
            return <Text>{ item }</Text>
          }} 
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
