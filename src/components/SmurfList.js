import React from 'react';
import Smurf from './Smurf';
import {fetchSmurfs} from './../actions/index.js';
import { connect } from "react-redux";
import { useEffect } from "react";

 const SmurfList = (props)=> {
    const { fetchSmurfs } = props;
    useEffect(() => {
      fetchSmurfs();
    }, [fetchSmurfs]);

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
        {props.smurfs.map((smurf) => (
          <Smurf smurf={smurf} />
        ))}
    </div>)
}

const mapStateToProps = (state) => {
    return {
      ...state
    };
  };
  
  export default connect(mapStateToProps, {fetchSmurfs})(SmurfList); 

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.