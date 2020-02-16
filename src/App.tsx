import React, { useState } from 'react';
import { UsersList } from './components/UsersList';
import { Loading } from './components/Loading';
import { createStore } from 'redux';
import allReducers from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers)

const App = () => {
  const [loading, setLoading] = useState(true)
  let timer = setInterval(() => {
    setLoading(false)
  }, 3000);
  if (!loading)
    clearInterval(timer)
  return (
    <Provider store={store}>
      {loading && <Loading />}
      {!loading && <UsersList />}
    </Provider>
  );
};

export default App;
