import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';

export class SubBreedsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subBreeds: [],
      breed: ''
    }
  }

  componentDidMount() {
    this.setState({
        subBreeds: this.props.navigation.state.params.subBreeds,
        breed: this.props.navigation.state.params.breed
    })
  }

  render() {
      const {state} = this.props.navigation;
      console.log(state.params)
    return (
      <View style={styles.container}>
        <Text style={styles.clickable} >Sub-breeds of {state.params.breed}</Text>
        <FlatList
          data={state.params.subBreeds}
          renderItem={(dog) => {
            console.log(dog.item, 'failure with flatlist subbreeds');
            return <Text style={styles.text2} key={dog.item}>{dog.item} {state.params.breed}</Text>}}
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
  clickable: {
    fontSize: 60,
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
