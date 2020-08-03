import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux'
import reducers from '../src/reducers/reducer'

const store = createStore(reducers,applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
