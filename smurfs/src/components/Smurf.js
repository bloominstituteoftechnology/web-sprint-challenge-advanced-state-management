import React from 'react';

export const Smurf = (props) => {
    const { name, age, height } = props;
    return(
        <div>
            <h2>{name}</h2>
            <p><b>Age:</b> {age} <b>Height:</b> {height}</p>
        </div>
    )
} 