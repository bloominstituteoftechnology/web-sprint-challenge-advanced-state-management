import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getData } from "../actions/index";

const App = (props) => {
  useEffect(() => {
    props.getData();
  }, []);
  return (
    <div className="App">
      <h1>{props.smurfData.name}</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfData: state.smurfData,
    is_loading_data: state.is_loading_data,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(App);
