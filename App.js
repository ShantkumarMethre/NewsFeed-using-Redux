/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import RootNavigator from './src/Navigator';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './src/reducer/DataReducer';


const createStoreWithMidleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMidleware(dataReducer);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>

  );
};



export default App;
