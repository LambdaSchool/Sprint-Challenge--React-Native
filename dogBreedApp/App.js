import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const axios = require('axios');

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			breeds: {}
		};
	}

	componentDidMount() {
		axios
			.get('https://dog.ceo/api/breeds/list/all')
			.then(response => {
				this.setState({
					breeds: response.data.message
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.header} />
				<View style={styles.container}>
					<Text>Here are a list of dog breeds</Text>
				<View style={styles.header} />
					<FlatList
						keyExtractor={dog => dog.message}
						style={styles.list}
						data={Object.keys(this.state.breeds)}
						renderItem={({ item }) => {
							return (
								<View>
									<View style={styles.listCont}>
										<Text style={styles.textItem}>
											-{item.toString().toUpperCase()}
										</Text>
									</View>
									<View style={styles.hr} />
								</View>
							);
						}}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		height: 15
	},
	hr: {
		height: 5,
		backgroundColor: '#d3d3d3'
	},
	textItem: {
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 12
	},
	listCont: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 400,
		height: 23
	},
	list: {
		width: '100%'
	}
});
