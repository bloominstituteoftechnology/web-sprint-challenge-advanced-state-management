import React, { Component } from "react";
import "./App.css";

import SmurfsList from './SmurfsList';

import SmurfsForm from './SmurfsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
         <SmurfsList/>
        <SmurfsForm/>
      </div>
    );
  }
}

export default App;
