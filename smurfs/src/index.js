import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import thunk from "redux-thunk"
import "./index.css";
import App from "./components/App";

let store = createStore(applyMiddleware(thunk, logger))



ReactDOM.render (
<Provider store={store}>
<App />
</Provider>
,document.getElementById("root"));
