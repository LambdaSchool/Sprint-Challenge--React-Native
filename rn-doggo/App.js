import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super();
    state = {
      name: '',
      breeds : []
    };
  }
  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/list/', {
      }).then(res => {
        res.json()
      }).then(responseJson => {
        console.log(responseJson); 
        this.setState({
          name: responseJson
        });
      }).catch(err => {
        console.error(err)
        this.setState({error: 'Error Fetching List'});
      }).catch(err => {
        console.log(err);
      });
    }
  render() {
    return (
        <View style={container}>
          <FlatList
          data={this.state.breeds}
          renderItem={({ item, key }) => {
          return (
            <View key={item.key}>
              <Text style={styles.listItem} >
              {item.name}
              </Text>
              </View>  
              );
           }}
        />
        </View>
      )
    }
  }
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFont: {
    fontSize: 28
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
});

const{ container, textFont, listItem } = styles;
