import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(<App />, document.getElementById("root"));
