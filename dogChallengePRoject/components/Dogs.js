import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class Dogs extends Component {
  render() {
    return (
      <View> I
        <FlatList
        data={this.props.data} 
        renderItem={}   
        />
      </View>
    );
  }
}