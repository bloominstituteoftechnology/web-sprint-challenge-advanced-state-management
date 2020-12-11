import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='navbar navbar-dark bg-primary'>
          <a className='navbar-brand'>Smurf Village Database</a>
        </nav>
        <main>
          <h1>Smurf Town</h1>
          <p>Come for adventure. Stay because of Smurfette&trade;</p>
          <br />
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

export default App;

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
