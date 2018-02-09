import { StackNavigator } from 'react-navigation';
import screen from './screens';

export default StackNavigator(
  {
    Breeds: {
      screen: screen.Breeds,
      navigationOptions: {
        headerTitle: 'Breeds'
      }
    },
    SubBreeds: {
      screen: screen.SubBreeds,
      navigationOptions: ({ navigation }) => ({
        headerTitle: `${ navigation.state.params.breed }`
      })
    }
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0096ff'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);


