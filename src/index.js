import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
//Task List:
//1. Add in all necessary components and libary methods.
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

//2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(logger, thunk));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />, 
    rootElement
);



//3. Wrap the App component in a react-redux Provider element.