import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

 const SmurfList = (props)=> {
    useEffect(() => {
        props.fetchSmurfs();
    },[]);
    
    return(<div className="listContainer">
        {props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id}/>)}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        loading: state.loading,
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.