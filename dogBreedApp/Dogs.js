import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from './Styles';

const axios = require('axios');

export default class Dogs extends React.Component {
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