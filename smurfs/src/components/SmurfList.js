import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/actions';

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            {props.isLoading ? <h2>Loading...</h2> : null}
            {props.error ? <h2>Error</h2> : null}
            {props.smurf.length > 0 ? (
            <div>
                {props.smurf.map((smurf) => (
                    <div>
                        <h2 key={smurf.id}>
                            Name: {smurf.name}<br/>
                            Age: {smurf.age}<br/>
                            Height: {smurf.height}
                        </h2>
                    </div>
                ))}
            </div>
            ) : null}
        </div>

    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);