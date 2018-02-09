import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super() 
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
  componentWillUpdate() {
    if(!this.state.listofDogs.length === 0 ){
      return true
      this.listOfStuff()
    }
    
  }
  listOfStuff() {
    const { listofDogs } = this.state
    return (
      <ScrollView>
            <FlatList data={listofDogs}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item, index})=> {
                        return <Text>{item}</Text>
                      }}
          />
         </ScrollView>
    )
  }
  
  whatsInState() {
    console.log('This is state',this.state.listofDogs)
  }

  render() {
    const { listofDogs } = this.state
    console.log(listofDogs)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="all" onPress={this.getAll}/>
        <Button title="console.log state" onPress={this.whatsInState}/>
         <View>
         {this.listOfStuff()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
