import {connect} from 'react-redux';

import React from 'react';
import Smurf from './Smurf';

 const SmurfList = (props)=> {

    const{isLoading, smurfsList} = props;

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return(
    <div className="listContainer">
        {
            smurfsList.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
        }
        
    </div>);
}

// industry standard state to prop function
  const mapStateToProps = (state) => {
    return{
        isLoading: state.isLoading,
        smurfsList: state.smurfsList,
    };
};

export default connect(mapStateToProps)( SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.