import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.