import React, { useEffect } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/actions";

const List = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <>
      <h2>Smurf List</h2>
      {props.smurfs.map((smurf) => (
        <Details key={smurf.id} smurf={smurf} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(List);
