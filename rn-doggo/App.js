import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
        message: [],
        text:'',
        error: null
    }
};
    onPressButtonGET = () => {
        fetch("https://dog.ceo/api/breeds/list", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            const {message} = responseData;
                this.setState(message.data);
                console.log(responseData);
        })
        .done();
    };
    render() {
        return (
            <View style={container}>
                <TouchableHighlight onPress={() => this.onPressButtonGET()} style={button}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <FlatList
                    data={this.state.message}
                    renderItem={({ item, key }) => {
                    return (
                      <View key={item.key}>
                        <Text style={listItem} >
                        {item}
                        </Text>
                        </View>  
                        );
                     }}
                  />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    },
    listItem: {
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 18
      },
});

const { listItem, button, container } = styles;