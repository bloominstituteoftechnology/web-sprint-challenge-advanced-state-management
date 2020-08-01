import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import { Smurfs } from "./Smurfs";
import Smurfs from "./Smurfs";
import { Button } from "@material-ui/core";
import { SmurfContext } from "../contexts/SmurfContext";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <Button variant="contained" color="primary">
          See Who's in the village!
        </Button>

        <Smurfs />
      </div>
    );
  }
}

export default App;
