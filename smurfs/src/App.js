import React from "react";
import "./App.css";
import Form from './components/Form'
import Smurf from './components/Smurf'
import { connect } from 'react-redux'

const App = props => {
  
    return (
      <div className="App">
      <h1>Smurf Manager</h1>
      <h4>Add Smurf:</h4>
      <Form/>
      <br></br>
      <h2>Smurf Roster:</h2>
      <Smurf  data={props} smurfData={props.smurfData}/>
      </div>
    );
}

const mapStateToProps = state => {

  return {
    name: state.name,
    age: state.age,
    height: state.height,
    smurfData: state.smurfData
  }
}

export default connect(mapStateToProps, {})(App);