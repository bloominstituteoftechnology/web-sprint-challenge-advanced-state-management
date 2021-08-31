import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// connecting component to redux
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index';


// this call doesn't use a store
class App extends Component {

// must add constructor to pass props in App
   constructor (props){
     super (props)
  }
  componentDidMount() {
    // line 77 readme
    this.props.fetchSmurfs()
    // axios.get('http://localhost:3333/smurfs')
    // .then(res => console.log(res))
    // .catch(err => console.log('Axios Error', err));
  }

  render() {
    //console.log(props)
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

// this is where you connect the fetchSmurfs (line 74 readme)
// if your don't need to pass state, pass a null
// we don't need a state as readme hasn't said so
// second argument is where our actions go

//export default App
export default connect(null, {fetchSmurfs})(App)

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.