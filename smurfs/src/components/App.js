import React, { Component } from "react";
import "./App.css";
import SmurfVillage from './SmurfVillage';
import SmurfForm from "./SmurfForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfVillage />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
