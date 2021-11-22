import React, { Component, useReducer} from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {createContext} from "react"
import reducer, {initialState} from './reducers/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const SmurfsContext = createContext()

const App =() => {
  const {smurfs, dispatch} = useReducer(reducer, initialState)

    
  
 
    return (
      <div className="App">
        <Header />
        <SmurfsContext.Provider value={smurfs, dispatch}>
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
        </SmurfsContext.Provider>
      </div>
    );
 
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.