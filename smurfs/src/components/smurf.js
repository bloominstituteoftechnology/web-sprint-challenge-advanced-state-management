import React from 'react';
import { connect } from "react-redux";
import {getSmurf} from '../actions/index';

const SmurfInfo=(props)=>{
    const fetched=e=>{
        props.getSmurf();
    }

    return(
        <div>
            <button onClick={fetched}>get smurfs</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
}

const mapDispatchToProps={getSmurf};

export default connect(mapStateToProps,mapDispatchToProps)(SmurfInfo);