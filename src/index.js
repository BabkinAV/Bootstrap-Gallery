import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducers/rootReducer';
// import { applyMiddleware } from 'redux';
import rootSaga, { helloSaga } from './redux/sagas';
import createSagaMiddleware from 'redux-saga';
// import { compose } from 'redux';

const sagaMiddleware = [createSagaMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware: sagaMiddleware,
});
sagaMiddleware[0].run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);
