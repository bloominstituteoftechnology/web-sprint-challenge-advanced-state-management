import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './store/reducers/'

// const reducer = () => {
//     return {}
// }

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("root"));
