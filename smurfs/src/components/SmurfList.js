import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

const SmurfList = (props) => {

    useEffect(() => {
        props.getSmurfs();
    }, []);

    return (
        <div>
            <h1>My Smurf Village</h1>
            {props.isLoading ? <p>Loading Smurfs...</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            {props.smurfs.map((smurf, index) => (
              
                 <Smurf smurf={smurf}  key={index} />
              
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);