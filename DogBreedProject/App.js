import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {},
    };
  }
  
  componentDidMount() {
    console.log('is Mounted');
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      //.then(data => console.log(data))
      .then((response) => {
        this.setState({
          dogs: response.data.message,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <FlatList
          data={Object.keys(this.state.dogs)}
          renderItem={({item}) => 
            <View>
              <Text key={item}>
                {item}
              </Text>
            </View>
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
