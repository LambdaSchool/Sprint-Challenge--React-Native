import React, { Component } from 'react';
import {
	View,
	Text,
	Animated,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

export default class Pup extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.move = new Animated.Value(0);
		this.styles = StyleSheet.create({
			container: {
				width: '50%',
				height: 150,
				justifyContent: 'center',
				alignItems: 'center',
				overflow: 'hidden',
				position: 'relative',
				transform: [
					{
						translateX: this.move.interpolate({
							inputRange: [0, 1],
							outputRange: [this.props.even ? 100 : -100, 0]
						})
					}
				]
			},
			image: {
				height: 150,
				width: '100%'
			},
			textWrap: {
				height: 40,
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#5C7FFF',
				position: 'absolute',
				bottom: 0,
				left: 0,
			},
			text: {
				textAlign: 'center',
				color: '#fff',
				fontSize: 18,
			}
		})
	}

	componentDidMount = () => {
		Animated.spring(this.move, {toValue: 1, useNativeDriver: true}).start();
	}

	capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
	}

  render = () => {
    return (
    	<TouchableOpacity 
    		onPress={this.props.navigate}
    		style={this.styles.container}>
    		<Image 
    			style={this.styles.image}
    			source={this.props.image} />
    		<View style={this.styles.textWrap}>
    			<Text style={this.styles.text}>{this.capitalize(this.props.breed)}</Text>
    		</View>
    	</TouchableOpacity>    
    );
  }
}
