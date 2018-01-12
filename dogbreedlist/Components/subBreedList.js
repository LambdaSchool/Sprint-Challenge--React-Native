import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class SubBreedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { breeds: [] };
  }

  componentDidMount() {
    //console.log('this.props', this.props)
    //console.log('this.props.navigation.state', this.props.navigation.state)
    //console.log('this.props.navigation.state.params', this.props.navigation.state.params)
    console.log('this.subBreeds', this.props.navigation.state.params.subBreeds) //yeah I had to do this to figure out the props....
    console.log('id', this.props.navigation.state.params.subBreeds.id) //im super amazing like this... go expo....
    const breeds = this.props.navigation.state.params.subBreeds.map((breed, i) => ({id: i, breed: breed}));
    console.log('breeds', breeds)
    this.setState({breeds});
    console.log('state', this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          keyExtractor={item => item.id}
          data={this.state.breeds}
          renderItem={({item}) => {
            return (
              <View style={styles.view}>
                <Text style={styles.list}>{item.breed}</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    fontSize: 24,
    color: 'black'
  }
})

//expo output just incase this doesn't work. 

// 5:26:52 PM
// this.props Object {
//   "navigation": Object {
//     "dispatch": [Function anonymous],
//     "goBack": [Function goBack],
//     "navigate": [Function navigate],
//     "setParams": [Function setParams],
//     "state": Object {
//       "key": "id-1515795997280-2",
//       "params": Object {
//         "subBreeds": Array [
//           "boston",
//           "french",
//         ],
//       },
//       "routeName": "SubBreedList",
//     },
//   },
//   "screenProps": undefined,
// }
// 5:26:52 PM
// this.props.navigation.state Object {
//   "key": "id-1515795997280-2",
//   "params": Object {
//     "subBreeds": Array [
//       "boston",
//       "french",
//     ],
//   },
//   "routeName": "SubBreedList",
// }
// 5:26:52 PM
// this.props.navigation.state.params Object {
//   "subBreeds": Array [
//     "boston",
//     "french",
//   ],
// }
// 5:26:52 PM
// this.props.navigation.state.params.subBreeds Array [
//   "boston",
//   "french",
// ]
// 5:26:52 PM
// id undefined
// 5:26:52 PM
// breeds Array [
//   Object {
//     "breed": "boston",
//     "id": 0,
//   },
//   Object {
//     "breed": "french",
//     "id": 1,
//   },
// ]
// 5:26:52 PM
// state Object {
//   "breeds": Array [],
// }