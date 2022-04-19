import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/reducers/rootReducer';
// import { compose } from 'redux'; 



const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
