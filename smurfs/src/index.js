import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { reducer } from './redux/reducers'
import "./index.css";
import App from "./components/App";

//Setup Redux Store
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>    
,
document.getElementById("root"));
