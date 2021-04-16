import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Smurf from "./components/Smurf";




class App extends Component {

  // Not super sure about this SmurfOnLoad but it looks like it does task 2 - but in reality that's coming from SmurfList itself //
  SmurfOnLoad = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect(null, {  fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.