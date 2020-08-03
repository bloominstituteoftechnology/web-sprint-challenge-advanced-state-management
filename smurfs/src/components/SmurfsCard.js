import React from 'react';

const SmurfsCard = (props) => {
    return (
        <div>
            <h2>Name:{' '}{props.smurf.name}</h2>
            <h3>Age:{' '}{props.smurf.age}</h3>
            <h3>Height:{' '}{props.smurf.height}</h3>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
    
}

export default SmurfsCard;