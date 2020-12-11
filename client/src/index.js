import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import App from "./App";
import reducer from './reducers/index';
const store = createStore(reducer, applyMiddleware(thunk,logger))
const rootElement = document.getElementById("root");

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.
