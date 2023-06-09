import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import {applyMiddleware ,compose, legacy_createStore as  createStore } from "redux";
import rootReducer from './reducers/index'
const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
