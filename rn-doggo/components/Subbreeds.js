import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation'

class Subbreeds extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            subbreeds: []
        }
        console.log(`In subreeds ${this.state}`)
    }
    
    async componentDidMount(){
        console.log('I am subbreed triggered')
        let data = await AsyncStorage.getItem('Subbreeds');
        console.log(data);
        let subbreeds = JSON.parse(data)
        this.setState({
            subbreeds
        })
    }
    render(){
        return(
            <ScrollView>
                <FlatList 
                    data={this.state.subbreeds} 
                    keyExtractor={(item) => item}
                    renderItem={({item}) => {
                        return <Text>{item}</Text>
                    }} 
                />
            </ScrollView>
        )
    }
}


export default Subbreeds;