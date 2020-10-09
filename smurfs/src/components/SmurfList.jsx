import React, { useEffect } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index.js";

const SmurfList = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      {props.smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf} />
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
