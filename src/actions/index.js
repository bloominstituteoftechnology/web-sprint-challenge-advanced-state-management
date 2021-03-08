import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_START = 'FETCH_START'
export const getSmurfs = () => (dispatch) =>{
  dispatch({type: FETCH_START})
  axios
  .get("")
  .then((""))
  .error("")
}





// import React from "react";
// import ReactDOM from "react-dom";
// import {createStore, applyMiddleware} from "redux"
// import {Provider} from "react-redux"
// import thunk from "redux-thunk"
// import "./index.css";
// import App from "./components/App";
// import { smurfDataReducer } from "./reducer";



// const store = createStore(reducer, applyMiddleware(thunk))
// console.log( "this is my store", store.getState)



// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
