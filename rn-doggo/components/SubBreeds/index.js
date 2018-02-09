import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Styles from '../Styles';
//'https://dog.ceo/api/breeds/list/all'

export default class SubBreeds extends Component {
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
                <Text>SubBreeds Page</Text>
            </View>
        );
    }
}