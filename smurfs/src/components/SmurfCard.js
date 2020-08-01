import React from 'react';


const SmurfCard = (props) => {

    return (
        <div>
            <h1>Name: {props.smurf.name}</h1>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </div>
    )
};

export default SmurfCard;

