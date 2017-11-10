import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: []
        };
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then((res) => {
                const breeds = Object.keys(res.data.message);
                this.setState({ dogs: breeds })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <View style={styles.container}>
    <FlatList
        data={this.state.dogs}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={ item => item }
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