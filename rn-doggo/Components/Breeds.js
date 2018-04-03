import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, List } from 'react-native';
const URL = 'https://dog.ceo/api/breeds/list/all';

class Breeds extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            error: null,
        };
        this.showBreeds();
    }


    showBreeds = () => {
        axios.get(`${URL}`)
            .then(response => {
                const { message } = response.data;
                this.setState({ data: Object.keys(message) });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: 'Error retrieving data',
                });
                setTimeout(() => {
                    this.setState({ error: null });
                }, 3000);
            });

    };

    keyExtractor = (item, index) => index;

    renderItem = ({ item }) => (
        <Text key={item.id}>{item}</Text>
    );

    render() {
        console.log('render this.state.data', this.state.data);

        return (
            <View style={{ padding: 10 }}>
                <Text style={heading}>Dog Breeds</Text>
                <FlatList data={this.state.data} style={flatList} extraData={this.state} keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        margin: 30,
        fontSize: 20
    },
    flatList: {
        padding: 5
    }
})

const { heading, flatList } = styles;

export default Breeds;




