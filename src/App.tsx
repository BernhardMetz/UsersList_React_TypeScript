import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { Home } from './components/Home'


const store = createStore(allReducers, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
