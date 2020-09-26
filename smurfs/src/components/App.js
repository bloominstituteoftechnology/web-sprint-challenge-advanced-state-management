import React, { Component, useEffect } from "react";
import {connect} from 'react-redux';

import {getSmurfData} from '../actions'
import "./App.css";

const App = (props) => {
  useEffect(() => { 
    props.getSmurfData()
  }, [])   

  return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
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
