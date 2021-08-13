import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

//3. Replace the static isLoading variable with the state loading variable.
const SmurfList = (props) => {
  const { smurfs, isLoading, dataError } = props;
  // const isLoading = false;
  // const testSmurf = {
  //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  //     name:'Poppa Smurf',
  //     position:'Village Leader',
  //     nickname: 'Pops',
  //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
  // }

  if (dataError) {
    return <h2>Error retrieving data: {dataError}</h2>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (<div className="listContainer">
    {/* 2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. */}
    {/* {smurfs.map((smurf, id) => (
      <Smurf smurf={smurf} />
    ))} */}
    {smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} />)}
  </div>);
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    dataError: state.dataError
  };
};
//1. Connect the smurfs and loading state values to the SmurfList component.  
export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.