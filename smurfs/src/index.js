import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import{ThemeProvider} from "styled-components"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    
        <Provider store={store}>
    <App />
    </Provider>
    
, document.getElementById("root"));
