import React from 'react';
import axios from 'axios';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {dogs: []};
  }
  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
      this.setState((props) => {
        const dogs = Object.keys(res.data.message);
        dogs.forEach((dog) => {
          if(Array.isArray(res.data.message[dog]) === true && res.data.message[dog].length > 0){
            res.data.message[dog].forEach((species) => {
              props.dogs.push(dog);
              props.dogs.push(species);
            });
          }else{
            props.dogs.push(dog);
          }
        });
      });
    });
  }
  render() {
    return (
      <View  style={styles.container}>
      <View style={{width: '100%', height: 25, backgroundColor: 'black'}} />
      <View style={{width: '100%', height: 25, backgroundColor: 'black'}}>
        <Text style={{fontSize: 20, color: 'white'}}>DOGS</Text>
      </View>
      <ScrollView style={{width: '100%', paddingLeft: 5}}>
        { this.state.dogs.map((dog, i) => {
          return <Text key={i}>{dog}</Text>;
        })}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});
