import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {StackNavigator} from 'react-navigation'

const apiUrl = 'https://dog.ceo/api/breeds/list/all'

class Breeds extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            breeds: []
        }
    }
    async componentDidMount(){
        try{
            let response = await axios.get(`${apiUrl}`)
            let breeds = response.data.message;
            this.setState({
                breeds
            })
        } catch(error){
            console.log(error)
        }
    }
    loadSubreeds = () => {
        
    }
   

    render(){
        let liBreeds = Object.keys(this.state.breeds)
        return(
            <ScrollView>
                <FlatList 
                    data={liBreeds} 
                    keyExtractor={(item) => item}
                    renderItem={({item}) => {
                        if(this.state.breeds[item].length){
                            return <TouchableOpacity onPress={() => alert('Pressed')}>
                                     <Text style={Hyperlinktext}>{item}</Text>
                                </TouchableOpacity>  
                        } else {
                            return <Text> {item} </Text>
                        }
                    }} 
                />
            </ScrollView>
        )
    }
}




const styles = StyleSheet.create({
    Hyperlinktext :{
        color:'#0080ff',
    },
  });

const {Hyperlinktext} = styles

export default Breeds