import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";


import { applyMiddleware, createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import reducer from './reducers/index'; 
// import { BrowserRouter as Router } from "react-router-dom";


const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(logger,thunk)); 

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        {/* <Router> */}
            <App />
        {/* </Router> */}
    </Provider>,
    rootElement
); 

//Task List: COMPLETE
//1. Add in all necessary components and libary methods.//
//2. Create a store that includes thunk and logger middleware support.//
//3. Wrap the App component in a react-redux Provider element.//