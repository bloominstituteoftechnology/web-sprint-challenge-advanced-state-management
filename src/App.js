import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import GuestList from './components/GuestList';
import Header from './components/Header';
import { fetchGuests } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

class App extends Component {

  componentDidMount(){
    this.props.fetchGuests()
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <AddForm/>
          <GuestList/>
        </main>
      </div>
    );
  }
}

export default connect(null, {fetchGuests})(App)