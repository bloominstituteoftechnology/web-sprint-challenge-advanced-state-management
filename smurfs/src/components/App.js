import React, { Component } from "react";
import Form from './Form'
import AddSmurf from './AddSmurf'
import SmurfList from './SmurfList'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className ="App">
      <Form />
      {/* <AddSmurf/> */}
      <SmurfList />

     </div>
    );
  }
}

export default App;
