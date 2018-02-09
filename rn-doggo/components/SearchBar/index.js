import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Styles from '../Styles';
//'https://dog.ceo/api/breeds/list/all'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <View style={Styles.container}>
                <Text>SearchBar Page</Text>
            </View>
        );
    }
}