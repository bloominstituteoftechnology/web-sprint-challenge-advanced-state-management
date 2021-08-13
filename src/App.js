import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

// import axios from 'axios';

import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//2. Call the fetchSmurfs action when the component first loads.
class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3333/smurfs')
    // .then(res => console.log(res))
    // .catch(err => console.log('Axios Error', err));
    this.props.fetchSmurfs()
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
// const mapStateToProps = state => {
//   return {
//       smurfs: state.smurfs, 
//       isLoading: state.isLoading
//   }
// }

// export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
export default connect(null, {fetchSmurfs})(App);
