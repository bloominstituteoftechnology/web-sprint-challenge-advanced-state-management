import React, { Component } from "react";
import "./App.css";
import Xlist from './x';
import {Xform} from './Xform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Xform />
        <Xlist />
      </div>
    );
  }
}

export default App;
