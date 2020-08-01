import React from 'react';

const SmurfsCard = (props) => {
    return(
        <div key={props.smurf.id}>
            <h2>Name: {props.smurf.name}</h2>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
        </div>
    )
}

export default SmurfsCard