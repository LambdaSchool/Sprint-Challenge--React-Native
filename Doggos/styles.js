import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        marginBottom: 10,
        color: '#009999',
        fontSize: 50,
        textDecorationLine: 'underline',
        fontFamily: 'Papyrus'
      },
      container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
          color: '#009999',
          fontSize: 20,
          margin: 5
      },
      list: {
          paddingLeft: 10,
          paddingRight: 40,
          backgroundColor: '#fff',
      }
    });

export default styles;