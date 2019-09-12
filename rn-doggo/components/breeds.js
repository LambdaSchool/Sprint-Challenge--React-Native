import React, { Component } from 'react';
import { Views, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

class Breeds extends Component {
    constructor() {
        super();
        this.state = {
            breeds: {},
        };
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/list/all')
        then(res => {
            this.setState({ breeds: res.data.message });
        })
        .catch(error => {
            console.log('No data for you!', error);
        });
    }

    render( {
        const breeds = Object.keys(this.state.breeds);
        return (
            <View>
                <Text>Pupper Breeds</Text>
                <FlatList
                    data={breeds}
                    renderItem=
        )
    })
}