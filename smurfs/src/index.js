import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from './reducers'



let store = createStore(reducer,applyMiddleware(thunk))
console.log(store.getState())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);
