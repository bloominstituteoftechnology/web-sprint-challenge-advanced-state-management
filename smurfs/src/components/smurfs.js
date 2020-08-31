import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from './Actions/smurfActions';

const Smurf = ({ getSmurf, name, age, height }) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf]);


    return (
        <h2>Smurf List! {getSmurf}</h2>

    );
}

const mapStateToProps = (state) => {
    return { name: state.name, age: state.age, height: state.height };
};

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(Smurf);
