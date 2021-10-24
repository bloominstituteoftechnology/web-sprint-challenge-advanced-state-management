import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

 const SmurfList = (props)=> {
    // const isLoading = false;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }

    return(<div className="listContainer">
        {props.fetchSmurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id}/>)}
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