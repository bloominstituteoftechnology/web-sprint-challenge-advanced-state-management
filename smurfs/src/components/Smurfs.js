import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { getSmurfs } from "../actions/actions.js";
import Smurf from "./Smurf.js";

function Smurfs(props) {

    useEffect(() => {
        props.getSmurfs();
    }, [])

    if(props.isFetching) return (<p>Loading Smurfs...</p>);

    return (
      <body>
      <div>
          <h1>SmurfsVille:</h1>
          <hr />
          <ul>
              {props.smurfs.map((smurf) => {
                  return (<Smurf key={smurf.id} smurf={smurf}></Smurf>)
              })}
          </ul>
            </div>
            </body>
  );
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getSmurfs }
)(Smurfs);