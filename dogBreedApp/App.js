import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

const axios = require('axios');

export default class App extends React.Component {
	state = {
		breeds: []
	};

	componentDidMount() {
		axios
			.get('https://dog.ceo/api/breeds/list/all')
			.then(response => {
				this.setState(prevState => {
					let { breeds } = prevState;
					return {
						breeds: response.data.message
					};
				});
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<ScrollView>
        <View style ={styles.header}/>
				<View style={styles.container}>
					<Text>Here are a list of dog breeds</Text>
					<FlatList
						keyExtractor={dog => dog.message}
						style={styles.list}
						data={this.state.breeds}
						renderItem={({ dog }) => {
							return (
								<View>
									<View style={styles.listCont}>
										<Text style={styles.textItem}>{dog.message}</Text>
										/>
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
		height: 1,
		backgroundColor: '#d3d3d3'
	},
	textItem: {
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 16
	},
	listCont: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 400
	},
	list: {
		width: '100%'
	}
});
