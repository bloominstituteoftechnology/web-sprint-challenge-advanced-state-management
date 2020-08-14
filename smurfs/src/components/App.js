import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import Form from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfList />
        <Form />
      </div>
    );
  }
}

export default App;
