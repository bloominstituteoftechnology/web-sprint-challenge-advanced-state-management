import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList'
import SmurfForm from './SmurfForm'


function App () {

    return (
      <div className="App">
        <h1>SMURFS!</h1>

        <SmurfForm/>
        <SmurfsList/>

      </div>
    );
  }


export default App;
