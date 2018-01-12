import React from 'react';
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import axios from 'axios';

import Content from './Content';

import styles from './Styles';

class Home extends React.PureComponent {
  state = {
    breeds: []
  };

  handleSubmit = (arr, index) => {
    console.log(arr, index);
    this.props.navigation.navigate('Content', { arr });
  };
  componentDidMount() {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        this.setState(prevState => {
          let { breeds } = prevState;
          const dataObj = res.data.message;
          const data = [];
          let index = 0;
          for (let prop in dataObj) {
            if( dataObj.hasOwnProperty( prop ) ) {
              data.push({ breed: prop, subBreeds: dataObj[prop], key: index });
              index += 1;
            }
          }
          return { breeds: data };                
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={this.state.breeds}
          renderItem={({ item, index }) => {
            return (
              <View key={item.key}>
                <View>
                <TouchableOpacity
                  style={styles.navbtn}
                  onPress={() => this.handleSubmit(item.subBreeds, item.key)}
                >
                  <Text style={styles.navbtntext}> {item.breed} </Text>
                </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  Content:  { screen: Content }
});

export default Routes;