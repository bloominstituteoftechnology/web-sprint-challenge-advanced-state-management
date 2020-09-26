import React, { useEffect } from 'react';
import { fetchData } from "./actions";
import './App.css';
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div>
      <header>
      <h1>SMURFS! W/Redux</h1>
      </header>
      <main>
          {props.smurfs.length > 0 && 
          props.smurfs.map((smurfs, i) => (
            <div>
              <h2>Name:{props.smurfs[i].name} </h2> 
            <h3>height:{props.smurfs[i].height}</h3>
            <h4>age:{props.smurfs[i].age}</h4>
            </div>
          ))}
          {console.log(props.smurfs)}
      </main>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    smurf:state.smurf,
    smurfs:state.smurfs
  }
}

export default connect(mapStateToProps, { fetchData })(App);

/*
<div>
            <h2>Name:{props.smurf.name} </h2> 
            <h3>height:{props.smurf.height}</h3>
            <h4>age:{props.smurf.age}</h4>
          </div>
          */