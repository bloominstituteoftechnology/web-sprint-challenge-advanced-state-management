import React from "react";

const SmurfData = props =>{
    return(
        <div className="smurf">
            <h2>Name:{props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height:{props.smurf.height}</p>

        </div>
    )
}

export default SmurfData;