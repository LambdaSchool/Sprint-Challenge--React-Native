import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {},
    };
  };

//not sure why this isn't working but I'm out of ideas and time's up.

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then((response) => {
        this.setState({
          breeds: response.data.message,
        });
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.breeds.keys.map((breed) => {
          return(
            <Text>{breed}</Text>
          );
        })}
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
