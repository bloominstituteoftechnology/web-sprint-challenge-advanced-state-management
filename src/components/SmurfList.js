import React from 'react';
import Smurf from './Smurf';
import {connect} from "react-redux"
import { fetchSmurfs } from "./../actions";

const SmurfList = (state) => {
   

    if (state.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="listContainer">
        {state.smurfs.map((smurf) => (
            <Smurf key={smurf.id}
                smurf={smurf} />
       
        ))}
        
    </div>
    )
} 

const mapStateToProps = (state) => {
    return ({
        smurfs: state.smurfs,
        isLoading: state.isLoading
    })
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);