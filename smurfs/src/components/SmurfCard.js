import React from 'react';


const SmurfCard = (props) => {

    return (
        <div>
            <h1>{props.smurf.name}</h1>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
        </div>
    )
};

