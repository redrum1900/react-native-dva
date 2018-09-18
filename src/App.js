import React from 'react';
import { createLogger } from 'redux-logger';

import { PersistGate } from 'redux-persist/es/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import Screen from './screens';

import dva from './dva';
import models from './models';
import Home from './pages/Home/home';

import { SplashImage } from './component/image';

const persistConfig = {
  key: 'root',
  storage,
};
const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store);
  return { ...store, persist };
};

const app = dva({
  onAction: createLogger(),
  extraEnhancers: [persistEnhancer()],
  models: models,
  onError(e) {
    console.log('onError', e);
  },
});
// persistStore(app._store);

const App = app.start(
  // <PersistGate
  //   loading={<SplashImage source={require('./assets/bg-home-1.png')} />}
  //   persistor={persistStore(app._store)}
  // >
  //   {/* <SplashImage source={require('./assets/splash.png')} /> */}
  //   <Screen onNavigationStateChange={null} />
  // </PersistGate>,
  <Screen onNavigationStateChange={null} />,
);

export const persistor = app._store;

export default App;
