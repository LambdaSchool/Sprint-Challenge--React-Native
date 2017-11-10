import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import {StackNavigator} from 'react-navigation';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {}
    }
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .done((response) => {
        this.setState({ dogs: response.data.message });
      })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Dogs!</Text>
        <FlatList
          data={Object.keys(this.state.dogs)}
          renderItem={({item}) => this.state.dogs[item].length > 0 ?
          <Text key={item} style={styles.clickable} onPress={() => navigate('SubBreeds', { subBreeds: this.state.dogs[item], breed: item })}>
          {item}
        </Text> 
          : <Text style={styles.text3} key={item}>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickable: {
    fontSize: 30,
    color: 'green',
    fontWeight: '800'
  },
  text1: {
    fontSize: 60,
    fontWeight: '800'
  },
  text2: {
    fontSize: 30
  },
  text3: {
    fontSize: 25
  }
});
