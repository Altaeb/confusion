import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Main from './src/components/MainComponent';
import { ConfigureStore } from './src/redux//configureStore';
import { Loading } from './src/components/LoadingComponent';

const { persistor, store } = ConfigureStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

