import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: '5%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%'
    },
    buttonWrapper: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
        marginTop: '2%',
        marginBottom: '2%',
    },
    button: {
        width: 'auto',
    },
    pageHeader: {
        fontSize: 20,
        fontWeight: '900',
        color: '#1784EE'
    },
    instructions: {
        fontSize: 15,
        marginTop: '2%',
        marginBottom: '2%',
    },
    formWrapper: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around'
    },
    listWrapper: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',
    },
    listText: {
        fontSize: 15,
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#b2daff',
        paddingLeft: '4%',
        paddingTop: '4%',
        paddingBottom: '4%',
        borderRadius: 8,
    },
    inputField: {
        width: '70%',
        height: 40,
        borderColor: '#1784EE',
        borderWidth: 2,
        borderRadius: 6,
        paddingLeft: 10,
        paddingRight: 10,
    },
    pageDivision: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4%',
        paddingBottom: '4%',
        borderBottomWidth: 2,
        borderColor: '#b2daff',
    },
});