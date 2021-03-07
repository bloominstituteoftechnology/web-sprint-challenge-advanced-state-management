import React, { Component } from "react";
import { fetchSmurfs } from './actions/index';
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { fetchSmurfs } = this.props;
    console.log('component mounting!')
    fetchSmurfs()
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
const mapDispatchToProps = {fetchSmurfs}

export default connect(null, mapDispatchToProps)(App)

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.