import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: {}
        }
    }
    render() {
      return (
        <View style={styles.container}>
          <Text>Home!</Text>
          <Button
        onPress={() => {
            axios.get('https://dog.ceo/api/breeds/list/all', {})
              .then(response => {
                this.setState({
                    dogs: response.message
                })
              })
              .catch((err) => err)
            }}
        title="View Dogs!"
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