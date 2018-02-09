import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class Voting extends React.Component {
    render() {
        return (
            <View style={container}>
                <Text>Doggo Voting Goes Here</Text>
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
  });
  const { container } = styles;