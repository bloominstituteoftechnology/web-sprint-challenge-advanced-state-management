import React from "react";
import ReactDOM from "react-dom";


import "./index.css";
import App from "./App"; //only component we need? Aside from importing the reducer

import { applyMiddleware, createStore } from "redux"; //add this to package.json --[x]
import { logger } from "redux-logger"; //add --[x]
import { Provider } from "react-redux";//add --[x]
import { reducer } from "./reducers/index";
import thunk from "redux-thunk"; //add --[x]




const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(logger, thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

//Task List:
//1. Add in all necessary components and libary methods. [x]
//2. Create a store that includes thunk and logger middleware support.[x]
//3. Wrap the App component in a react-redux Provider element.[x]