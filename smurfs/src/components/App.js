import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../redux/actions'
import { Smurf } from './Smurf';
import Form from './Form';
import "./App.css";


const App = (props) => {

  


  const handleClick = (e) => {
    e.preventDefault();
    props.getSmurfs();
  }

  return (
    <div className="App">
      <div>
        <h1>SMURFS! W/Redux</h1>
        {/*loading and error messages*/}
        <div>        
          {props.isLoading}  
          {props.error}
        </div>
        
        <Form/>
        
        <button onClick={handleClick}>Get Smurfs</button>
      </div>
      {/*If there are smurfs, render*/}
      {props.smurfs.length > 0 && props.smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}
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
