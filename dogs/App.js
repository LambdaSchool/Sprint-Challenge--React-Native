import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  StatusBar
} from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
import SubBreed from './sub'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bowwow: {},
    };
  }


  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .done((response) => {
        this.setState({ bowwow: response.data.message });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList
          keyExtractor={item => item}
          data={Object.keys(this.state.bowwow)}
          renderItem={({item}) => <View style={styles.items}><Text style={styles.font} key={item}> {item.toUpperCase()} </Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  items: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 20
  }
});
