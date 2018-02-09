import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default Home = ({navigation}) => (
  <View style={styles.container}>
    <Image source={require('./assets/wowee.png')} />
    <Button onPress={() => navigation.navigate('Dogs')} title="View Dogs" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
