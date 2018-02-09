import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Styles from '../Styles';
//'https://dog.ceo/api/breeds/list/all'

export default class SubBreeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subBreed: '',
            subBreedList: ['This Breed has no known sub breeds']
        }
    }
    keyExtractor = (item, index) => {
        return (`${item}${index}`);
    }

    componentWillMount() {
        let subBreed = this.props.navigation.state.params.subBreed;
        console.log('subBreed is: ', subBreed)
        axios.get(`https://dog.ceo/api/breed/${subBreed}/list`)
            .then(res => {
                let subBreedUppercase = this.capitalizeBreedName(subBreed);
                let subBreedList = res.data.message;
                if (subBreedList.length > 0) {
                    this.setState({ subBreed: subBreedUppercase, subBreedList })
                } else {
                    this.setState({ subBreed: subBreedUppercase })
                }

            })
            .catch(err => {
                console.log('Error Getting SubBreeds List')
            })
    }
    capitalizeBreedName(name) {
        let nameCopyArr = name.split('');
        nameCopyArr[0] = nameCopyArr[0].toUpperCase();
        return nameCopyArr.join('');
    }
    handleListResult() {
        let list = this.state.subBreedList;
        if (list[0] != 'This Breed has no known sub breeds') {
            return (
                <ScrollView contentContainerStyle={Styles.listWrapper}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.subBreedList}
                        renderItem={({ item }) => {
                            return (
                                <Text
                                    style={Styles.listText}
                                    name={item}
                                >
                                    {item}
                                </Text>
                            );
                        }}
                    />
                </ScrollView>
            );
        } else {
            return (
                <Text style={Styles.instructions}>{list[0]}</Text>
            );
        }
    }

    render() {
        console.log(this.state)
        return (
            <View style={Styles.container}>
                <Text style={Styles.pageHeader}>
                    {`${this.state.subBreed} SubBreeds`}
                </Text>

                {this.handleListResult()}

            </View>
        );
    }
}