import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/index';
// when you use curly braces on reducer you must 'export your function'

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />, 
    </Provider>,
    rootElement
);

//const myName = 'Alieze';
//Task List:
//1. Add in all necessary components and libary methods.

//2. Create a store that includes thunk and logger middleware support.

//3. Wrap the App component in a react-redux Provider element.