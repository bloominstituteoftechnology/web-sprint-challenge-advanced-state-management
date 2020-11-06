import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h4>{props.smurf.name}</h4>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf;