import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    doglist : []
  }
  
  componentWillMount() {
   axios.get('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      this.setState(prevState => {
        let { doglist } = prevState;
        const data = [];
        let tempDogList = res.data.message;
        let index = 0;
        for(let dog in tempDogList) {
          if(tempDogList.hasOwnProperty(dog)) {
            data.push({breed: dog, key: index} )
            index += 1;
          }
        }
        return { doglist: data }
      });
    
    })
    .catch(err => {
      console.log(err)
    })
  }
  renderDogList() {   
    console.log(this.state.doglist)
    return(
      <View>
        <FlatList
          style={styles.list}
          data={this.state.doglist}
          renderItem={({item, index}) => {
            return (
              <View key = {item.key}>
                <Text> {item.breed} </Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
  render() {
    return (
        <View style={styles.container}>
          <View>
          <Text style={styles.header}>DogList</Text>
          </View>
          {this.renderDogList()}
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
  header: {
    marginTop: 100,
    marginBottom:10,
    fontSize: 25
  },
  list: {
    marginBottom: 100
  }
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