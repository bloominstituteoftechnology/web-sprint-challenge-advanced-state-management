import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
