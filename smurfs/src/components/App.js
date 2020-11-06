import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from './SmurfForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
