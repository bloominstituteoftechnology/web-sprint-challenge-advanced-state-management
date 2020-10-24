import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {smurfReducer} from './reducers/SmurfReducer';

const logger = ({ getState }) => next => action => {
  next(action);
};

let store = createStore(smurfReducer, applyMiddleware(logger, thunk));
console.log(store);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById("root"));
