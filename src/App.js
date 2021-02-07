import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  render() {
       
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.