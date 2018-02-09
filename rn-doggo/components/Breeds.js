import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

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
        console.log(this.props)
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
    loadSubbreeds = async (item) => {
        try{
            await AsyncStorage.setItem('Subbreeds', JSON.stringify(this.state.breeds[item]))
        } catch (error){
            console.log(error)
        }
        console.log(`My props are ${this.props}`)
        this.props.navigation.navigate('Subbreeds');
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
                            return <TouchableOpacity onPress={() => this.loadSubbreeds(item)}>
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