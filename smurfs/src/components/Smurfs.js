import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "./store/index";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div>
      <h1> Smurfs gotta smurf!</h1>
      {props.isLoading ? <h4> Will Gargamel capture the smurfs? </h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}> No smurfs today Azreal {props.error}</p>
      ) : null}
      {props.smurfs.length > 0 ? (
        <div>
          {props.smurfs.map((smurf) => {
            return (
              <div>
                <h2>{smurf.name}</h2>
                <h3>Age: {smurf.age} </h3>
                <h3>Height: {smurf.height}</h3>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
