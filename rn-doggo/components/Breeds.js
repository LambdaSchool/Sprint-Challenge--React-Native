import React from 'react';
import { Stylesheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class Breeds extends React.Component {
    render() {
        return (
            <View>
                <Text>Doggo Breeds Go Here</Text>
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