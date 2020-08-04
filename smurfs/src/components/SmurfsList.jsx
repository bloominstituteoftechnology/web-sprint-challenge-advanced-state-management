import SmurfsCard from './SmurfsCard';
import {connect} from 'react-redux';
import { fetchSmurfs } from '../actions/actions';
import React, { useEffect } from 'react';


const SmurfsList = (props) => {
    
    useEffect(() => {
        props.fetchSmurfs() 
    }, [])
    return(
        <div>
            {
                props.smurfs.map(
                    smurf => (
                        <SmurfsCard smurf = {smurf} />
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {

    return {    
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);