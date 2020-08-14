import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import smurfReducer from './components/reducer/smurfReducer'

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
