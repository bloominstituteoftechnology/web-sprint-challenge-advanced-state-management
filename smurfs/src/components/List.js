import React, { useEffect } from 'react';
import Smurfs from './Smurfs';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../store/actions';

const List = props => {
    
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            <h2>Smurf List</h2>
            {props.isLoading ? <p>Loading Data...</p> : null}
            {props.smurfs.length > 0 && props.smurfs.map(smurf => (
                <Smurfs key={smurf.id} smurf={smurf}/>
            ))}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, { fetchSmurfs })(List);
