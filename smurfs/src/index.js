import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"

const store = createStore()
//need to add middleware and reducer still



ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById("root"));
