import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const axios = require('axios');

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Here are a list of dog breeds</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
