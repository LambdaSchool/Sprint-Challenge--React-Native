import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import axios from 'axios';

class SignIn extends Component {

  state = {
    username: '',
    password: '',
  }

  handleSignIn = () => {
    
    const { navigate } = this.props.navigation;
    const { username, password } = this.state;

    const endpoint = 'http://localhost:5000/api/login';

    axios
      .post(endpoint, {

      })
      .then(response => {

        const { token } = response.data;

        if (token !== null) {

          AsyncStorage.setItem('token', token)
            .then(res => navigate('SecurePage'))
            .catch(error => console.log(error));

        }

      })
      .catch(error => console.log(error));

  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={ this.state.username }
          onChangeText={ (username) => this.setState({ username }) }
          />
        <TextInput
          placeholder="Password"
          value={ this.state.password }
          onChangeText={ (password) => this.setState({ password }) }
          />
        <TouchableOpacity
          onPress={ this.handleSignIn } >
          <Text>Sign In</Text>
        </TouchableOpacity>
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

export default SignIn;
