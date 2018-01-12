import React from 'react';
import { Text, ScrollView, View, FlatList } from 'react-native';

import styles from './Styles';

export default class Content extends React.PureComponent {
  state = {
    breeds: []
  };
  componentDidMount() {
    this.setState(prevState => {
      const { navigate } = this.props.navigation;
      const breeds = this.props.navigation.state.params.arr;
      return breeds.length !== 0 ? { breeds } : { breeds: ["there are no sub breeds for this breed"] };
    });
  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={this.state.breeds}
          renderItem={({ item, index }) => {
            return (
              <View key={"16" + item}>
                <View>
                  <Text style={styles.subtext}> {item} </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    );
  }
}