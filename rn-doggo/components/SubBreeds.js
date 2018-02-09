import react, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SubBreeds extends Component {
  constructor() {
    super();
    // Now, do I make a new state here? Or do I pass down from Breeds? I think the latter but unsuccessful so far.
  }

  render() {
    return (
      <View>
        <Text>Sub Breeds</Text>
      </View>
    )
  }
}

export default SubBreeds;