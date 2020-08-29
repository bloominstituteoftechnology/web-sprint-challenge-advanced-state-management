import React, { Component } from "react";
import "./App.css";
import SmurfInfo from './smurf'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfInfo/>
      </div>
    );
  }
}

export default App;
