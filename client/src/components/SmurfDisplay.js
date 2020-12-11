import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";
import Smurf from "../components/Smurf";
function SmurfDisplay({ getSmurfs, smurf, error, appLoading }) {
  useEffect(() => {
    getSmurfs();
  }, []);
  if (error) {
    return <h2>Error! {error}</h2>;
  }
  if (appLoading) {
    return <h2>Loading data...</h2>;
  }

  return smurf ? (
    <div>
      {smurf.map((item, idx) => (
        <Smurf key={idx} item={item} />
      ))}
    </div>
  ) : (
    <div>
      <h2>No Smurfs to display</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    error: state.error,
    appLoading: state.appLoading,
  };
};
export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
