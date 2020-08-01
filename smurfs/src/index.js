import React, { useContext, useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import { SmurfContext } from "./contexts/SmurfContext";
import { smurfReducer } from "./reducer/smurfReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

// const [smurfs] = useState ([{name: "", age: "", height: ""}])
// const smurfContext = createContext();

const store = createStore(smurfReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
