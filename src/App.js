import React, { Component } from "react";
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { useEffect } from "react";

import { getSmurfs } from "./actions/index"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
    const { getSmurfs } = props

    useEffect(() => {
      getSmurfs();
    });

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

export default connect(null, { getSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.