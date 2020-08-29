import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf.js";
import SmurfForm from "./SmurfForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Smurf/>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;