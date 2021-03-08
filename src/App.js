import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import { fetchSmurfs } from './actions'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, [])
  
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfList/>
        </main>
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      books: state.books
    }
  }

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.