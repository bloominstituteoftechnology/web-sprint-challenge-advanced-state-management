import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {smurfReducer} from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware} from 'redux';

const store = createStore(smurfReducer, applyMiddleware(thunk, logger))

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store= {store}>
    <App />, 
    </Provider>,
    rootElement
   
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.