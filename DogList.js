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
import { StackNavigator } from 'react-navigation';
import styles from './Styles';
import axios from 'axios';
import Routes from './App'
import BreedList from './BreedList';

export default class DogList extends React.Component {
  state = {
    dogs: [],
    text: '',
    error: ''
  };

  componentDidMount() {
    console.log('DogList is Mounted');
    const promise = axios.get('https://dog.ceo/api/breeds/list/all', {});
    promise
      .then(res => {
        if (res !== null) {
          this.setState(prevState => {
            // console.log('res:', res)
            let dogsOb = res.data.message;
            let dogs = Object.keys(dogsOb).map(dogBreed => {
              return { [dogBreed]: dogsOb[dogBreed] }
            });
            return {
              dogs
            };
          });
        }
      })
      .catch(err => {
        console.log('On did Mount', err);
      });
  }

  componentWillUnmount() {
    // console.log('is Un Mounted');
    // const dogs = this.state.dogs.slice();
    // AsyncStorage.setItem('dogs', JSON.stringify(dogs));
  }

  handleTextChange = text => {
    this.setState({ text });
  };

  addDog = () => {
    console.log('clicked');
    if (this.state.text === '') {
      this.setState({ error: `No message in text field.` });
      setTimeout(() => {
        this.setState({ error: '' });
      }, 2000);
      return;
    }
    this.setState(prevState => {
      let { text, dogs } = prevState;
      return {
        dogs: dogs.concat({ key: dogs.length, text }),
        text: ''
      };
    });
  };

  deleteDog = index => {
    this.setState(prevState => {
      let dogs = prevState.dogs.slice();
      dogs.splice(index, 1);
      return { dogs };
    });
  };
  show = (params) => {
    console.log(`breed: ${params.breed} subBreed  ${params.subBreed}`);
    this.props.navigation.navigate('BreedList', params);
  };
  _keyExtractor = (item, index) => Object.keys(item)[0];
  _keyExtractorSubBreed = (item, index) => item;
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.dogs.length > 0
            ? 'Dogs'
            : `Loading dogs`}
        </Text>
        {this.state.error !== '' ? <Text>{this.state.error}</Text> : null}
        <FlatList
          keyExtractor={this._keyExtractor}
          style={styles.list}
          data={this.state.dogs}
          renderItem={({ item, index }) => {
            const dkey = Object.keys(item)[0];
            const values = item[dkey];
           // console.log(`breed: ${dkey}  sub breeds: ${values}`);
            return (
              <View>
                <View style={styles.listCont}>
                  <Text style={styles.textItem}>{values.length ?
                    <Text onPress={() => this.show({breed: dkey, subBreed: null })}>{dkey + ' sub-breeds: '}</Text> :
                    <Text onPress={() => this.show({breed: dkey, subBreed: null })}>{dkey}</Text>}
                    <Text style={styles.subTextItem}>{
                      values.map((sub, i) => (
                        <Text key={sub} onPress={() => this.show({ breed: dkey, subBreed: sub })}>
                          {i < values.length - 1 ? sub + ',' : sub}
                        </Text>))
                    }
                    </Text>
                  </Text>
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
