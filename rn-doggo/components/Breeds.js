import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Axios from 'axios';

export default class Breeds extends React.Component {
    constructor() {
        super();
        this.state = {
            breeds: [],
        };
    }

    componentDidMount() {
        Axios
            .get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                this.setState({ breeds: res.data.message });
            })
            .catch(error => {
                console.log('There was an error fetching data: ', error);
            });
    };

    render() {
        const breedsNames = Object.keys(this.state.breeds);
        return (
            <View style={container}>
                <Text>Doggo Breeds Go Here</Text>
            { this.state.breeds !== null ? 
                <FlatList 
                    data={breedsNames}
                    renderItem={({ item, index }) => {
                        const subBreeds = this.state.breeds[item];
                        return (
                            <View>
                                { this.state.breeds[item].length > 0 ?
                                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('subBreeds', { subBreeds: subBreeds }) }>
                                        <Text key={item+index} style={breedName_extra}>{item}</Text>
                                    </TouchableOpacity> 
                                    : 
                                        <Text key={item+index} style={breedName}>{item}</Text>
                                }

                            </View>
                        );
                    }}

                /> : <Text>No Breeds</Text> }
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
    breedName :{
        margin: 3,
        padding: 2,
    },
    breedName_extra :{
        margin: 3,
        padding: 2,
        color: 'blue',
    },
  });
  const { container, breedName, breedName_extra } = styles;
