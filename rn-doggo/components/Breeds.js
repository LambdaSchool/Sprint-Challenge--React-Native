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

    componentDidMount() {
        Axios
            .get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                this.setState({ breeds: res.data.message });
                // console.log(this.state.breeds);
            })
            .catch(error => {
                console.log('There was an error fetching data: ', error);
            });
    };

    render() {
        const breedsNames = Object.keys(this.state.breeds);
        //console.log(breedsNames);
        return (
            <View style={container}>
                <Text>Doggo Breeds Go Here</Text>
                <FlatList 
                    data={breedsNames}
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