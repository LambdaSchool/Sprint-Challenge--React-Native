import { StackNavigator } from 'react-navigation';
import screen from './screens';

export default StackNavigator({
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
});


