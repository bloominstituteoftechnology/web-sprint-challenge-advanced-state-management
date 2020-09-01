import React from 'react';
import { connect} from 'react-redux';
import {getSmurfs} from '../actions/getSmurfs';

function SmurfList({getSmurfs,smurfs}){
    console.log(smurfs)
    return(
        <div>
            {smurfs.map(smurf=>{
                return(
                    <div>
                <h4>{smurf.name}</h4>
                <p>Age:{smurf.age}</p>
                <p>Height cm:{smurf.height}</p>
                </div>
                )
            })}
            <button onClick={getSmurfs}>smurf me</button>
        </div>
    )
}
const mapStateToProps=state=>{
    console.log(state)
    return{
        smurfs: state.smurfs,
        // isFetching: state.isFetching,
        isAdding: state.isAdding,
        error: state.error
    };
}

const mapDispatchToProps={getSmurfs};

export default connect(mapStateToProps,mapDispatchToProps)(SmurfList);
