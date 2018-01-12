import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      currentlySelected: ''
    };
  }

  componentDidMount() {
    if (this.state.dogs.length === 0) {
      axios.get("https://dog.ceo/api/breeds/list/all")
        .then(response => {
          this.setState(prevState => {
            let dogVals = [];
            Object.keys(response.data.message).map((el, i) => {
              if (response.data.message[el].length > 0) {
                response.data.message[el].forEach(z => {
                  dogVals.push(el + ' ' + z);
                })
              } else {
                dogVals.push(el);
              }
            })

            console.log("DOGS ARE: ", dogVals);
            let dogs = dogVals
            return { dogs };
          })
        })
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <Image style={styles.container} source={{uri: 'https://hacked.com/wp-content/uploads/2018/01/Dogecoin-Hype1129732562.jpg'}}/>
        <View style={styles.innerContainer}>
          <FlatList
            style={styles.list}
            data={this.state.dogs}
            renderItem={({item}) =>
              <View>
                <View style={styles.listCont}>
                  <Text style={styles.dog}>{item}</Text>
                </View>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  listCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7781d6',
    height: 20,
    borderColor: 'gold',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginLeft: '25%'
  },
  container: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  dog: {
    color: 'blue'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    height: '100%',
    width: '100%'
  }
});
