import React from 'React';
import axios from 'axios';
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    FlatList,
    ScrollView
} from 'react-native';
const URL = 'https://dog.ceo/api/breeds/list/all';

class DogBreeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: {},
        };
    }
    componentDidMount() {
        axios
            .get(`${URL}`, {})
                .then(res => {
                    this.setState({
                        dogs: res.data.message,
                    });
            })
            .catch(err => {
                console.log(err);
                this.setState({error: 'Error Fetching Dog Names'});
            });
    }
    render() {
        return (
            <View style={container}>
                <ScrollView>
                    <FlatList
                        data={Object.keys(this.state.dogs)}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <Text>
                                        {item}
                                    </Text>
                                </View>
                            )
                    }}/>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const {container} = styles;

export default DogBreeds;