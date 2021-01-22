import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../Actions/Actions";
import Smurf from "./Smurf";

const SmurfList = ({ getSmurf, isFetching, error, smurfs }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  return (
    <div>
      {isFetching ? (
        <h3>Promise to be smurfin' fast!...</h3>
      ) : (
        <div>
          {smurfs.map((smurf) => {
            return <Smurf key={smurf.id} smurf={smurf} />;
          })}
        </div>
      )}
      {error !== "" ? <h4 className="error">{error}</h4> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);
//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
