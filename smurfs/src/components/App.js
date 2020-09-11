import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs'

import {connect} from 'react-redux'
import {fetchSmurfs} from '../store/actions/smurfActions'

class App extends Component {

  componentDidMount() {
    console.log('Component did mount')
    fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
      </div>
    );
  }
}


//export default App;

export default connect(() => {return {}}, {fetchSmurfs})(App)
