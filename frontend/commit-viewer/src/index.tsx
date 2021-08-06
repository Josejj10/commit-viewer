import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'react-bootstrap';
import { store, persistor } from './features/store';
import './index.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner animation="border" role="status" />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
