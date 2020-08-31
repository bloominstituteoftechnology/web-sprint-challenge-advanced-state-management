import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from './Reducers/smurfReducer';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";


let store = createStore(smurfReducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
