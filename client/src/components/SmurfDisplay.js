import React from "react";
import { connect } from "react-redux";
import { findingSmurf } from "../actions";
import Smurf from "./Smurf";

const SmurfDisplay = (props) => {
  const { error, smurfs, isLoading } = props;
  useEffect(() => {
    props.findingSmurf();
  }, []);

  useEffect(() => {
    props.findingSmurf();
  }, [props.isPosting]);

  return (
    <div>
      <h2>Here are the Smurfs</h2>
      {error ? <p>{error}</p> : null}
      {isLoading ? <p>Animating the Village...</p> : null}
      {smurfs.map((smurf) => (
        <div>
          <Smurf smurf={smurf}></Smurf>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isPosting: state.isPosting,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { findingSmurf })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
