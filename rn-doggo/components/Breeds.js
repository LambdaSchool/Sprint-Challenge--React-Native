import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Axios from 'axios';

export default class Breeds extends React.Component {
    constructor() {
        super();
        this.state = {
            breeds: [],
        };
    }

    componentWillMount() {
        Axios
            .get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                this.setState({ breeds: res.data.message });
                console.log(this.state.breeds);
            })
            .catch(error => {
                console.log('There was an error fetching data: ', error);
            });
    };

    render() {
        return (
            <View style={container}>
                <Text>Doggo Breeds Go Here</Text>
                <FlatList 
                    data={this.state.breeds}
                    renderItem={({ item }) => <Text>{item}</Text>}
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

  /*
        <FlatList
                data = {this.state.breeds}
                renderItem = {({ breed, index }) => {
                    return(
                        <View key={breed}>
                            <Text>{breed[0]}</Text>
                        </View>
                    );
                }}
                />
                */