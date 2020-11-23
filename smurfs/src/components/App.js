
import React, { Component } from "react";
import SmurfList from './SmurfList'
import "./App.css";
import SmurfForm from "./SmurfForm";
class App extends Component {
  render() {
    return (
      <div className ="App">
      <SmurfForm />
      <SmurfList />

     </div>
    );
  }
}

export default App;
