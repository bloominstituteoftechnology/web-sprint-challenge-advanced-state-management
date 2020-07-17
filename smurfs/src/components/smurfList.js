import React, { useEffect } from 'react';
import SmurfCard from './smurfCard';

import { fetchSmurfs } from '../actions/actions';
import { connect } from 'react-redux';



const SmurfList = (props) => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [props])



    return (

        <div>
            {props.smurfs.map((smurf) => (
                <SmurfCard key={smurf.id} smurf={smurf} />
               
            ))}
        
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFETCHING: state.isFETCHING,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);