import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

 const SmurfList = (props)=> {
    const { smurfs, isLoading, dataError } = props;

    if (dataError ) {
        return <h2>Error retrieving data: {dataError}</h2>;
    }
 
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return(<div className="listContainer">
        {smurfs.map((smurf, id) => (
                  <Smurf smurf={smurf}/>  
        ))}
    </div>);
}
const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      dataError: state.dataError
    };
  };
  
export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.