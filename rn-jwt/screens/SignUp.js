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

class SignUp extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleSignUp = () => {

    const { navigate } = this.props.navigation;
    const { username, password, confirmPassword } = this.state;

    if (password === confirmPassword) {

      const endpoint = 'http://localhost:5000/api/users';

      axios
        .post(endpoint, {
          username: username.trim(),
          password
        })
        .then(response => {

          const { success } = response.data;

          if (success === 'User saved')
            navigate('SignIn');

          else alert('Some error occured');

        })
        .catch(error => alert(error));

    }

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
        <TextInput
          placeholder="Retype Password"
          value={ this.state.confirmPassword }
          onChangeText={ (confirmPassword) => this.setState({ confirmPassword }) }
          />
        <TouchableOpacity
          onPress={ this.handleSignUp } >
          <Text>Sign Up</Text>
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

export default SignUp;
