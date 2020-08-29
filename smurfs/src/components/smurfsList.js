import React from "react";
import { connect } from "react-redux";

import Smurf from "./smurf";

const SmurfList = (props) => {
  return(
    <>
      <h2>List of Smurfs</h2>
      {props.smurfs.map((smurf) => {
        return <Smurf smurf={smurf} key={smurf.id}/>
      })}

    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
};
export default connect(
  mapStateToProps,
  {  }
)(SmurfList);