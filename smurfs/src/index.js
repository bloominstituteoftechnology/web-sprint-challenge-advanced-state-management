import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './store/reducers'
import "./index.css";
import App from "./components/App";



const store = createStore( reducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById("root"));
