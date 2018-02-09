

//https://github.com/LambdaSchool/Sprint-Challenge--React-Native
// plan of attack. using https://streetsmartdev.com/create-horizontal-list-react-native/
// create a static flatlist view react native app and then change the data to include async
// data using axios. when that's working add functionality from listview to support infinite scrolling and pull
// to refresh (https://dev-blog.apollodata.com/loading-data-into-react-natives-flatlist-9646fa9a199b)

import React, { Component } from 'react';
import { Flatlist, StyleSheet, Text, View } from 'react-native';



const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              title={null}
              image={{ url: "http://via.placeholder.com/160x160" }}
              containerStyle={{ padding: 0, width: 160 }}
            >
              <Text style={{ marginBottom: 10 }}>
                hello
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
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
