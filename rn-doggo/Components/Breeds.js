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
    }


    showBreeds = () => {
        axios.get(`${URL}`, parameters)
            .then(response => {
                const { message } = response.data;
                this.setState({ data: message });
                console.log('this.state.data', this.state.data);
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

    keyExtractor = (item, index) => item.id;

    renderItem = ({ item }) => (
        <MyListItem
            id={item.id}
            title={item.title}
        />
    );

    render() {
        return (
            <View style={{ padding: 10 }}>
                <Text style={heading}>Dog Breeds</Text>
                <FlatList data={this.state.data} style={{ flex: 1, padding: 10 }} extraData={this.state} keyExtractor={this.keyExtractor}
                    renderItem={this.renderitem} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        margin: 30,
        fontSize: 20
    }
})

const { heading } = styles;

export default Breeds;




