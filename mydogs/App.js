import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    doglist : {},
    error: ''
    }
  }
  componentDidMount() {
   axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      this.setState({
        doglist : res.data.message
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
          <FlatList 
            data={Object.keys(this.state.doglist)}
            renderItem={({item, index}) => {
              <View key={item}>{item}</View>
            }}></FlatList>      
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