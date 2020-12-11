import React, { Component , useReducer, useEffect} from "react";
import { connect } from 'react-redux';
import {reducer, initialState} from './reducers/index';
import {getSmurf} from './actions/index';
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    props.getSmurf();
    console.log('this is running')
  }, [])
  
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm dispatch={dispatch}/>
          <SmurfDisplay formData={state} dispatch={dispatch}/>
        </main>
      </div>
    );
  
}
const mapStateToProps = state => {
  return{
      smurfs:state.smurfs,
  }
}

export default connect(mapStateToProps, {getSmurf})(App);


//Task List:
//1. Add in SmurfDisplay and AddForm into your application.