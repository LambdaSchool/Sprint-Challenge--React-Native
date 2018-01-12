import React, { Component } from 'react';
import {
	View,
	Animated,
	Text,
  StyleSheet,
  FlatList
} from 'react-native';
import Axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Pup from './Pup';

export default class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggies: {},
      hasImages: false
    }
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      list: {
        width: '100%'
      }
    });
  }

  componentDidMount = () => {
    Axios.get('https://dog.ceo/api/breeds/list/all')
      .then(doggies => {
        const dogs = doggies.data.message;
        this.setState({ doggies: dogs });
        Axios.all(
          Object.keys(dogs)
          .map(dog => Axios.get(`https://dog.ceo/api/breed/${dog}/images/random`))
        ).then(res => {
          const images = res.map(pic => pic.data.message);
          let i = 0;
          for(let pup in dogs) {
            dogs[pup].push(images[i]);
            i++;
          }
          this.setState({doggies: dogs, hasImages: true });
        })
      })
      .catch(err => console.log(err));
  }

  render = () => {
    return (
      <View style={this.styles.container}>
        <LinearGradient 
          style={this.styles.container2}
          colors={['#8f94fb', '#4e54c8']}>
          <FlatList
            style={this.styles.list} 
            data={Object.keys(this.state.doggies)}
            numColumns={2}
            getItemLayout={(data, index) => (
              {length: 100, offset: 100 * index, index}
            )}
            renderItem={({item, index}) => (
              <Pup
                navigate={() => this.props.navigation.navigate('Dog', {name: 'Brent'})}
                even={(index + 1) % 2 === 0}
                index={index}
                breed={item}
                image={this.state.hasImages ? {uri: this.state.doggies[item][this.state.doggies[item].length - 1]} : require('../../public/dog.png')}  />
            )}
            keyExtractor={(item, index) => index} />
        </LinearGradient>
      </View>
    );
  }
}