import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const DogGetter = (props) => {
  axios.get('https://dog.ceo/api/breeds/list/all', {
    })
    .catch(err => console.log(err));
    return(
      <View>
        <ul>
          {props.dogs.map((dog, i) => {
            return <li key={i}>{dog}</li>;
          })}
        </ul>
      </View>
    )
};  


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }
    render() {
      return (
        <View>
          <DogGetter />
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
