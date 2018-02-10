import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class SubBreed extends Component {

  render() {
    const { sub } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <FlatList 
          data={sub}
          keyExtractor={(index) => index}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SubBreed;