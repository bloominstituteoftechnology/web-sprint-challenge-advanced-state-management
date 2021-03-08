import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import logger from 'redux-logger'
import "./index.css";
import App from "./components/App";
import { reducer } from './reducers/index'
import {SmurfList} from './components/SmurfList'
import  {Smurf} from './components/Smurf'
import {AddForm} from './components/AddForm'



const store = createStore(reducer, applyMiddleware(thunk, logger))
console.log( "this is my store", store.getState)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));


//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.