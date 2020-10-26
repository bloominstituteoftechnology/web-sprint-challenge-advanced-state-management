import React from 'react';

const SmurfCard = props => {
    const {name, age, height} = props.smurf;
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
};

export default SmurfCard;