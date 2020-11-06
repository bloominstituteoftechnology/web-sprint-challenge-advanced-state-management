import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../redux/actions'
import "./App.css";


const App = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    props.getSmurfs();
  }
  
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <button onClick={handleClick}>Get Smurfs</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
