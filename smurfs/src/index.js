import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { smurfsReducer } from './store/reducers';

import "./index.css";
import App from "./components/App";

const store = createStore(smurfsReducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
