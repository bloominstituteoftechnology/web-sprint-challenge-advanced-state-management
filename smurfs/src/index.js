import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux';
import smurfReducer from './reducers/smurfReducer'
import logger from 'redux-logger'

let store = createStore(smurfReducer, applyMiddleware(thunk, logger))

ReactDOM.render(

<Provider store={store}>
<App /></Provider>, document.getElementById("root"));
