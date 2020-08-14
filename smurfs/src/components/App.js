import { connect } from 'react-redux'
import React, { Component } from "react";
import { getSmurfs } from '../actions'
import SmurfContainer from './SmurfContainer'
import Form from './Form'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log("mount")
    this.props.getSmurfs()
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h1>Smurf Village</h1>
        <Form />
        <SmurfContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs })(App);
