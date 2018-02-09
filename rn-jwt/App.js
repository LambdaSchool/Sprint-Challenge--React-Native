import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput
} from 'react-native';

class App extends React.Component {

  state = {
    username: ''
  }

  render() {

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={ this.state.username }
          onChangeText={ (username) => this.setState({ username }) }
          autoComplete="no"
          />
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
