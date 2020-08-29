import React, { Component, useEffect } from "react";
import { getSmurf } from "../actions/index";
import SmurfForm from "./Form";
import SmurfList from "./List";
import { connect } from 'react-redux';
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="App">
     {props.data.map((smurfs) => {
       return (
         <div key={smurfs.id}>
           <h1>Name: {smurfs.age}</h1>
          <p>Age: {smurfs.age}</p>
          <p>Height: {smurfs.height}</p>
         </div>
       );
     })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  }
};

export default connect(mapStateToProps, { getSmurf })(App);
