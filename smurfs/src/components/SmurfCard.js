import React from 'react';


const SmurfCard = (props) => {
    const image = require('../components/Shroom.png');
    return (
        <div className='App-div'>
            <img className='image' src={image} alt='red mushroom with white polka dots' />
        <div className= 'text'>
            <h1>Name: {props.smurf.name}</h1>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </div>
        </div>
    )
};

export default SmurfCard;

