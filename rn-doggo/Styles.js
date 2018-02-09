import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		alignSelf: 'center',
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
	textTitle: {
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 30,
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

