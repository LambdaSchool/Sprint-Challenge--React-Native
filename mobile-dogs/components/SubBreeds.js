import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';

export default class SubBreeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subBreeds: []
    }
  }

  componentDidMount() {

    const subBreeds = this.props.navigation.state.params.subBreeds;
    // console.log(this.props.navigation);
    // console.log(subBreeds);
    this.setState({
      subBreeds
    });
  }

  _createData(arr) {
    const result = [];
    let counter = 0;
    for (const value of arr) {
      result.push({
        key: counter,
        subBreed: value
      });
      counter++;
    }
    return result;
  }

  render() {
    console.log(this._createData(this.state.subBreeds));
    return (

      <FlatList
          style={styles.list}
          data={this._createData(this.state.subBreeds)}
          renderItem={({item}) => {return (<View style={styles.listItem}><Text>{item.subBreed}</Text></View>);}}>
      </FlatList>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    width: '100%',
    backgroundColor: 'powderblue'
  },
  listItem: {
    height: 40,
  }
});
