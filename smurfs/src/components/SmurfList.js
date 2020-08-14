import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/actions';

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            {/* {props.isLoading ? <h2>Loading...</h2> : null}
            {props.error ? <h2>Error</h2> : null}
            {props.length > 0 ? (
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.age}</p>            
                    <p>{props.height}</p>
                    ) : null} */}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);