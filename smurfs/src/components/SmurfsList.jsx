import React, { useEffect } from "react";
import SmurfsCard from "./SmurfsCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfsList = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h1>Coolest Smurfs You Know..</h1>
      {props.smurfs.map((smurf) => (
        <SmurfsCard key={smurf.id} smurf={smurf} />
      ))}
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

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);