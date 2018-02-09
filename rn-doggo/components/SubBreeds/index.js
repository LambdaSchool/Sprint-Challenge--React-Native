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
            subBreed: '',
        }
    }
    componentWillMount() {
        let subBreed = this.props.navigation.state.params.subBreed
        this.setState({ subBreed })
    }
    capitalizeBreedName() {
        let nameCopy = this.state.subBreed;
        nameCopyArr = nameCopy.split('')
        nameCopyArr[0] = nameCopyArr[0].toUpperCase();
        return nameCopyArr.join('');
    }

    componentWillUnmount() {

    }
    render() {
        console.log(this.state)
        return (
            <View style={Styles.container}>
                <Text style={Styles.pageHeader}>
                    {`${this.capitalizeBreedName()} SubBreeds`}
                </Text>
            </View>
        );
    }
}