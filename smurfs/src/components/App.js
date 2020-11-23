import React, { Component } from "react";
import Form from "./smurfForm";
import List from "./smurfList";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <h2>Welcome to your state management version of Smurfs!</h2>
        <h2>Add More Smurfs Here!</h2>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
