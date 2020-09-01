import React, { Component } from "react";
import "./App.css";
import Smurfs from './smurfs';
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;
