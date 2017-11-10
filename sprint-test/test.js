import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(resp => {
        console.log(resp)
        this.setState({ dogs : resp.data.message })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
        title={'Sub Breeds'}
        onPress={() => {
          this.props.navigation.navigate('SubBreeds');
        }} />
        <FlatList
          data={Object.keys(this.state.dogs)}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    marginTop: '7%'
  },
});

// const Routes = StackNavigator({
//   Home: { screen: Home },
//   SubBreeds: { screen: SubBreeds }
// });

// export default Routes;