import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, ScrollView, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation'

class Subbreeds extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            subbreeds: []
        }
        console.log(`In subreeds ${this.state}`)
    }
    
    async componentDidMount(){
        let data = await AsyncStorage.getItem('Subbreeds');
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