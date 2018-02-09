import { StackNavigator } from 'react-navigation';
import screen from './screens';

export default StackNavigator({
  Breeds: {
    screen: screen.Breeds
  },
  SubBreeds: {
    screen: screen.SubBreeds
  }
});


