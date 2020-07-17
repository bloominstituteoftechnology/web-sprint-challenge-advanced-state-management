import React, { Component } from "react";
import "./App.css";
import Smurf from './smurfs'
import SmurfForm from './smurfForm'


class App extends Component {
  render() {
    return (
      <div className="App">
         <h1>Smurf Village</h1>
        <SmurfForm/>
        <Smurf/>
      </div>
    );
  }
}

export default App;
