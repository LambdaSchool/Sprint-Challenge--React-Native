import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        listofDogs: []
      }
      this.getAll = this.getAll.bind(this)
      this.whatsInState = this.whatsInState.bind(this)
  }
  getAll() {
  axios.get('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
      const {data} = response;
      const Dogs = Object.keys(data.message)
      console.log('This is from Response', Dogs)
      this.setstate =({
        listofDogs: this.state.listofDogs = Dogs 
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

  whatsInState() {
    console.log('This is state',this.state.listofDogs)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="all" onPress={this.getAll}/>
        <Button title="console.log state" onPress={this.whatsInState}/>
          <FlatList 
          data={this.state.listofDogs}
          extraData={this.state}
          renderItem={({ item}) => (
            <ListItem
              title={item}/>
          )}
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
