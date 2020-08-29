import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index";

const Smurf = ({ getSmurf, smurfs }) => {

  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  return (
    <div className="smurf">
      {smurfs}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { smurfs: state.smurfs };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);