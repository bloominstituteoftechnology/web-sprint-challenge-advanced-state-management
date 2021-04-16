import React from "react";
import ReactDOM from "react-dom";
//Task List:
//1. Add in all necessary components and libary methods.
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import "./index.css";
import App from "./App";

const { worker } = require("./mocks/browser");
worker.start();

const rootElement = document.getElementById("root");

//2. Create a store that includes thunk and logger middleware support.
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	//3. Wrap the App component in a react-redux Provider element.
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
