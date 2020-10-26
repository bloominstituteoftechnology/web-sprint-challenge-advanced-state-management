import React, { Component } from "react";
import Form from "./form.js";
import "./App.css";


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Smurfs Village no.112354</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
