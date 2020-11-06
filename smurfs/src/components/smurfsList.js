import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './smurf.js';
import { getSmurfs } from '../store/actions';

const SmurfsList = props => {
    useEffect(() => {
        props.getSmurfs()
    }, [])

    // useEffect(() => {
    //     props.getSmurfs()
    // }, [props.isPosting])

    return (
        <div>
            <h2>Smurfs</h2>
            {props.isLoading ? <p>Loading smurfs...</p> : null}
            <p>{props.error}</p>
            <p>{}</p>
            {props.smurfs.map((smurf) => (
                <Smurf smurf={smurf}/> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isPosting: state.isPosting,
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error,
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfsList)