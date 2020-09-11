import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import smurfApiCalls from './components/reducers';

const store = createStore(smurfApiCalls, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
);
