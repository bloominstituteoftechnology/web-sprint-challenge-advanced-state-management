import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';

import { connect } from 'react-redux';


const SmurfList = (props) => {
    console.log('from SList', props);


    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <SmurfCard
                        key={smurf.id}
                        smurf={smurf} />
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {

    }
)(SmurfList);