import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import Styles from '../Styles';
//'https://dog.ceo/api/breeds/list/all'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subBreed: '',

        }
    }

    handleText = (text) => {
        this.setState({ subBreed: text })
    }
    handleSearch = () => {
        let subBreed = this.state.subBreed;
        this.props.navigation.navigate('SubBreeds', { subBreed });
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.pageHeader}>The Dogo App</Text>
                <View style={Styles.pageDivision}>
                    <Text style={Styles.instructions}>Search By Breed Name</Text>
                    <View style={Styles.formWrapper}>
                        <TextInput
                            placeholder={'Search by Breed Name'}
                            style={Styles.inputField}
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.handleText(text)}
                        />
                        <Button
                            style={Styles.button}
                            title={'Search'}
                            onPress={() => this.handleSearch()} />
                    </View>
                </View>
                <View style={Styles.pageDivision}>
                    <Text style={Styles.instructions}>Or click bellow for a list of Breeds</Text>
                    <View style={Styles.buttonWrapper}>
                        <Button style={Styles.button} title={'Breeds List'} onPress={() => { this.props.navigation.navigate('Breeds') }} />
                    </View>
                </View>

            </View>
        );
    }
}