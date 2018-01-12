import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './Styles';

import Dogs from './Dogs';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header} />
				<Text style={styles.textTitle}>Welcome to an App of Dog Breeds</Text>
				<Button
					title="Dog Breeds"
					onPress={() => {
						this.props.navigation.navigate('Dogs');
					}}
				/>
			</View>
		);
	}
}

const Routes = StackNavigator({
	Home: { screen: Home },
	Dogs: { screen: Dogs }
});

export default Routes;
