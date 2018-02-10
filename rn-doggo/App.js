import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        Dogs: []
      }
  }

  componentWillMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                console.log('Dogs in the house');
                const dogs = Object.keys(res.data.message);
                this.setState({ dogs })
            })
            .catch(err => {
                console.log(err, 'no dogs in the house');
            })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList data={this.state.dogs}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({item, index})=> {
                        return <Text>{item}</Text>
                      }}
          />
        </ScrollView>
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
