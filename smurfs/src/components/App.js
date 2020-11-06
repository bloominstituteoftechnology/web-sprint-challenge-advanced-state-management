import React, { Component } from "react";
import "./App.css";
import Smurflist from "./SmurfList"
import SmurfForm from "./SmurfForm"


class App extends Component {
  render() {
    return (
      <div className="App">
       <Smurflist/>
       <SmurfForm/>
      </div>
    );
  }
}

export default App;
