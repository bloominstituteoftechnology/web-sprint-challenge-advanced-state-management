import React from 'react'



// step 9. create a new component for each smurf and render the data 
const SmurfCard = (props) => {
 
    return (
        <div>
            <h1>{props.smurf.name}</h1>
            <p>Age: {props.smurf.age}</p>           
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default SmurfCard; 
