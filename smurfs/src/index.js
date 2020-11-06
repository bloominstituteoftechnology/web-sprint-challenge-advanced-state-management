import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// styles
import "./index.css";

// components
import App from "./components/App";

// redux (helpers)
import { smurfsReducer } from "./store/reducers";

const store = createStore(smurfsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
document.getElementById("root"));
