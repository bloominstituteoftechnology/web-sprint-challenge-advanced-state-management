import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { connect } from "react-redux";
import { fetchSmurfs } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Switch } from 'react-router-dom';



class App extends Component {

  componentDidMount() {
    const { fetchSmurfs } = this.props;
  
    fetchSmurfs()
  }

  //That doesnt work for some reason... this is where I stop because it is pretty good now :)


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

const mapDispatchToProps = { fetchSmurfs };

export default connect(null, mapDispatchToProps)(App);

// export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.