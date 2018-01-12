import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    height: 1,
    backgroundColor: '#d3d3d3',
  },
  listCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 400,
  },
  textItem: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
});

export default styles;