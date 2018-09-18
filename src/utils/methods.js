import { NavigationActions, StackActions } from 'react-navigation';
import { Dimensions } from 'react-native';

export const resetNavigationTo = (routeName, navigation, params = null) => {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName, params })],
  });
  navigation.dispatch(resetAction);
  // navigation.navigate(routeName);
};

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const cloneObj = obj => JSON.parse(JSON.stringify(obj));
export const delay = (delayed, ms) => Promise.all([delayed, sleep(ms)]).then(([data]) => data);

export const scale = (value = 0) => value * (Dimensions.get('window').width / 1024);

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;
