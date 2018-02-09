import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import Axios from 'axios';

export default class SubBreeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subBreeds: [],
        }
    }

    componentDidMount() {
        const subBreeds = this.props.navigation.state.params.subBreeds;
        this.setState({ subBreeds });
    }

    render() {
        console.log(this.state.subBreeds);
        return (
            <View style={container}>
                <Text>Doggo Sub-Breeds Go Here</Text>
                <FlatList 
                    data={this.state.subBreeds}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <Text key = {item+index}>{item}</Text>
                            </View>
                        );
                    }}

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
  const { container } = styles;
