import React, { useEffect } from "react";
import {connect} from 'react-redux';

import {getSmurfData} from '../actions'

import Form from './Form';

import "./App.css";

const App = (props) => {
  useEffect(() => { 
    props.getSmurfData()
  }, [])   

  return (
      <div className="App">
        <h1>Welcome to the SMURF REDUX VILLAGE</h1>
        {props.isLoading ? <h2>Loading Village Data...</h2> : null}
        <p>population:{props.smurfData.length}</p>
        <p>smurfs: {props.smurfData.map(smurf => smurf.name).join(', ')}</p>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <Form />
      </div>
    );
}

const mapStatetoProps = (state) => {
  return {
    smurfData:  state.smurfData,
    isLoading:  state.isLoading,
  }
}

export default connect(mapStatetoProps, {getSmurfData})(App);
