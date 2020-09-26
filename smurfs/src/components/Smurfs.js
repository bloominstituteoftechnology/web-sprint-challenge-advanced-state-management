import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import { SmurfCard } from "./SmurfCard";

const Smurfs = (props) => {
  console.log("props from Smurfs", props);

  const fetchSmurfs = (e) => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <div className="smurfslist">
      <h2>See the Smurfs</h2>

      <button onClick={fetchSmurfs} type="submit">
        Show me the Smurfs!
      </button>

      <div>
        {props.smurfs.map((smurf) => (
          <SmurfCard key={smurf.id} smurf={smurf} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  error: state.error,
});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
