import React, { useEffect } from "react";
import SmurfForm from './Form';
import { getSmurf } from "../actions/index";
import { connect } from 'react-redux';
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="App">
      <SmurfForm/>
     {props.data.map((smurfs) => {
       return (
         <div key={smurfs.id}>
            <h1>Name: {smurfs.name}</h1>
            <p>Age: {smurfs.age}</p>
            <p>Height: {smurfs.height}</p>
         </div>
       );
     })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state
  };
};

export default connect(mapStateToProps, { getSmurf })(App);
