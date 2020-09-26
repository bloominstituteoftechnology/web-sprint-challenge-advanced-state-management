import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { smurfsReducer } from "./components/reducers"
import App from "./components/App";

const store = createStore(smurfsReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>
, document.getElementById("root"));
