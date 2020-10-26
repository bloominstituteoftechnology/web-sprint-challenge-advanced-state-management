import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {reducer} from "./reducers/reducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {Provider} from "react-redux";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
    , document.getElementById("root"));
