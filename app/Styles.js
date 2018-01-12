import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    width: '100%'
  },
  listCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14
  },
  header: {
    marginTop: 30,
    color: '#000000',
    fontSize: 20,
  }
});

export default styles;