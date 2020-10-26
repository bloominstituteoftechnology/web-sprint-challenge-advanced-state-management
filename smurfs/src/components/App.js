import React, { Component } from "react";
import Form from "./form.js";
import "./App.css";
import SmurfList from "./smurfList";
import Footer from "./footer";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Smurfs Village no.112354</h1>
        </header>
        <Form />
        <SmurfList />
        <Footer />
      </div>
    );
  }
}

export default App;
