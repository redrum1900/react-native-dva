import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import dva from './dva';
import models from './models';
import Home from './pages/Home/home';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

const app = dva({
  models: models,
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Home />);

export default App;
