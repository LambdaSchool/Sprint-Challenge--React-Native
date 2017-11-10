import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import axios from 'axios';

export default class Breeds extends React.Component {
  constructor(props) {
    super(props);

    this.state = { breeds: [] };
  }
  async componentDidMount() {
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');
      
      this.setState({breeds: Object.entries(res.data.message)});
    } catch (error) {
      this.setState({error: 'Error fetching data'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.error ? this.state.error : null}</Text>
        <FlatList 
          keyExtractor={item => item[0]}
          data={this.state.breeds}
          renderItem={({item}) => {
            return (
              <View style={styles.items}>
                {
                  item[1].length ?
                  <TouchableHighlight
                  onPress={() => {this.props.navigation.navigate('SubBreeds', {subBreeds: item[1]})}}
                  >
                    <Text style={{color: 'blue', fontSize: 24}}>{item[0]}</Text>
                  </TouchableHighlight> : 
                  <Text style={{fontSize: 24}}>{item[0]}</Text>
                }
              </View>
            );
          }}
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
  items: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
