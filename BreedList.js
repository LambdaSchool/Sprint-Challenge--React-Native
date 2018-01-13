import React from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    TextInput
} from 'react-native';
import { Constants, WebBrowser } from 'expo';
import styles from './Styles';
import axios from 'axios';

export default class BreedList extends React.Component {
    constructor(props) {
        super(props);
        //console.log('BreedList params keys:',Object.keys(props.navigation.state.params))
        const { breed, subBreed } = props.navigation.state.params;
        this.state = {
            subBreedUrs: [],
            breed,
            subBreed,
            error: ''
        };
    }
    componentDidMount() {

        const query = `https://dog.ceo/api/breed/${this.state.breed}${this.state.subBreed ? '/' + this.state.subBreed : ''}/images`;
        console.log(`BreedList is Mounted breed: ${this.state.breed}  subBreed: ${this.state.subBreed}  
                    subBreed?  ${this.state.subBreed ? 'true' : 'false'}  query: ${query} `);    
        axios.get(query)
            .then(res => {
                if (res !== null) {
                    this.setState(prevState => {
                        // console.log('res:', res)
                        const urls = res.data.message;
                        const subBreedUrs = Array.isArray(urls) ? urls.filter(u => u.trim().length > 0) : []
                        return {
                            subBreedUrs
                        };
                    }, () => {
                       // console.log(`subBreedUrs: ${this.state.subBreedUrs}`);
                    });
                }
            })
            .catch(err => {
                console.log('On did Mount', err);
            });
    }
    _keyExtractor = (item, index) => item;
    numberRegex = /.+?\_(\d+)\.jpg/;
    render() {
      // console.log(this.state);
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            {this.state.subBreedUrs.length > 0
              ? `${this.state.breed} ${this.state.subBreed ? this.state.subBreed : ''} Pictures`
              : `${this.state.breed} ${this.state.subBreed ? this.state.subBreed : ''} Loading` }
          </Text>
          {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}
          <FlatList
            keyExtractor={this._keyExtractor}
            style={styles.list}
            data={this.state.subBreedUrs}
            renderItem={({ item, index }) => {
              // console.log(`BreedList FlatList item: ${item}  index: ${index}`);
              const number = item.match(this.numberRegex)[1]
              return (
                <View>
                  <View style={styles.listCont}>
                      <Text onPress={() => WebBrowser.openBrowserAsync(item)} >{number}</Text>  
                  </View>
                  <View style={styles.hr} />
                </View>
              );
            }}
          />
        </View>
      );
    }    
}