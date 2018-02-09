import { StackNavigator } from 'react-navigation';

import screen from './screens';

const routes = {
  'SignUp': {
    screen: screen.SignUp
  },
  'SignIn': {
    screen: screen.SignIn
  },
  'SecurePage': {
    screen: screen.SecurePage
  },
};

export default StackNavigator(routes);
