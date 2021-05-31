import React from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';

 const SmurfList = (props)=> {
    const isLoading = props.loading;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    const smurf = {
        name: '',
        position: '',
        nickname: '',
        description: ''
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {/* {props.smurfArray.map(smurf => (<Smurf key = {smurf.id} smurf = {smurf}/>))} */}
        <Smurf smurf={smurf}/>
    </div>);
}

const mapStatetoProps = (state) => {
    return {
        smurfArray: state.smurfArray,
        loading: state.loading
    }
}

export default connect (null, mapStatetoProps) (SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.