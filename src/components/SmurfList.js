import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

const SmurfList = (props) => {
  const { smurfs, isLoading, error } = props;

  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {smurfs &&
        smurfs.map((smurf, idx) => {
          return (
            <div key={idx}>
              <Smurf smurf={smurf} />;
            </div>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
