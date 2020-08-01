import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import SmurfsCard from './SmurfsCard';

const SmurfsList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    return(
        <div>
            {props.smurfs.map(smurfs => (<SmurfsCard smurf={smurfs}/>))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
    }    
}

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(SmurfsList);