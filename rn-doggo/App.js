import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }
  
  componentWillMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        this.setState((state) => {
          const dogs = res.data.message;
          return { dogs };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const dogs = Object.keys(this.state.dogs);
    console.log(dogs);
    return (
      <View style={styles.container}>
        <FlatList 
          data={dogs}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index}
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
    width: '100%',
  },
});
