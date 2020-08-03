import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import Loader from 'react-loader-spinner';
import SmurfForm from './smurfForm'

import { fetchSmurfs } from '../actions/smurfActions'

const App = ({ smurfList, isFetching, fetchSmurfs }) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {isFetching && <Loader type="BallTriangle" color="#88CCFF" height={100} width={100} />}
      <SmurfForm />
      <div>
        {smurfList.length ? (
          <>
            {smurfList.map(smurf => (
              <div key={smurf.name}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            ))}
          </>
        ) : (
            <p>Smurf is not found</p>
          )}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    smurfList: state.smurfList,
    isFetching: state.isFetching
  };
};


export default connect(mapStateToProps, { fetchSmurfs })(App);