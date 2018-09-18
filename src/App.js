import React from 'react';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import dva from './dva';
import models from './models';
import Home from './pages/Home/home';

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
app.use(createLoading());
// persistStore(app._store);

const App = app.start(<Home />);

export default App;
