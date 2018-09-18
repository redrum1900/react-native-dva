import { createStackNavigator } from 'react-navigation';
import Home1 from './pages/Home/home';
import Home2 from './pages/Home/home2';

const Screen = createStackNavigator(
  {
    Home: {
      screen: Home1,
      navigationOptions: {},
    },
    Home2: {
      screen: Home2,
      navigationOptions: {},
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
);

export default Screen;
