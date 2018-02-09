import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Axios from 'axios';

export default class SubBreeds extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const breedsNames = Object.keys(this.state.breeds);
        //console.log(breedsNames);
        return (
            <View style={container}>
                <Text>Doggo Sub-Breeds Go Here</Text>
                <FlatList 
                    data={this.props}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Text key = {item+index}>{item}</Text>
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
  });
  const { container } = styles;
