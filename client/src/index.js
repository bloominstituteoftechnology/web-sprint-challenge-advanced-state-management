
// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// import "./index.css";
// import App from "./App";

// import { reducer } from "./reducers/index";

// const store = createStore(reducer, applyMiddleware(thunk));

 

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// );

// //Task List:
// //1. Add in all necessary components and libary methods.
// //2. Create a store that includes thunk middleware support.
// //3. Wrap the App component in a react-redux Provider element.
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import "./index.css";
import App from "./App";
import { reducer} from './reducers/index'

const { worker } = require("./mocks/browser");
worker.start();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById("root");


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    rootElement
);
