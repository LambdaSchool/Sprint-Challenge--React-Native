import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  List,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

import Content from './Content';

// import styles from './Styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    // axios.get('https://dog.ceo/api/breed/stbernard/images/random').then(res => {
    //   this.setState({ url: res.data.message });
    // });
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.setState(prevState => {
          let dogsArr = [];
          Object.keys(res.data.message).map(breed => {
            if (res.data.message[breed].length > 0) {
              res.data.message[breed].forEach(subBreed => {
                dogsArr.push(subBreed + ' ' + breed);
              });
            } else {
              dogsArr.push(breed);
            }
          });
          let dogs = dogsArr.sort();
          return { dogs };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text h2 style={styles.header}>
          Sprint-Mobile - Using Dog API
        </Text>
        <FlatList
          style={styles.list}
          data={this.state.dogs}
          renderItem={({ item }) => {
            return (
              <View style={styles.listCont}>
                <Text>{item}</Text>
              </View>
            );
          }}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: { flex: 1 },
  listCont: { marginTop: 5, flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Routes = StackNavigator({
  Home: { screen: Home },
  Content: { screen: Content }
});

export default Routes;
