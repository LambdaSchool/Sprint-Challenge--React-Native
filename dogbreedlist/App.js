import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { BreedList, SubBreedList } from './Components';

import { styles } from './stylesheet.js';

//I tired to make the names as easy to follow as possible.  This definitely was a challenge! 
//There's only so many ways you can say, "dog breed" and 'sub dog breed" before you just 
//give up and say, "breed" lol.

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => {this.props.navigation.navigate('BreedList')}}>
          <Text style={styles.buttonText}>Touch to view all dog breeds</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: {screen: Home},
  BreedList: {screen: BreedList},
  SubBreedList: {screen: SubBreedList}
});

export default Routes;

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