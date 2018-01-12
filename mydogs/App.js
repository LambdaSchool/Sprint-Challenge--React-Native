import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doglist : []
    }
  }
  componentDidMount() {
   axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      console.log(res.data.message.african);
      this.setState({
        doglist:res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>DogList </Text>
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
/*
{this.state.doglist.map((dog, index) => {
  return(
    <Text>
      {console.log(dog)}
    </Text>
  );
}
)}
*/