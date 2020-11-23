
import React from "react";

const SmurfData = props =>{
    return(
        <div className="smurf">
            <h2>Name: {props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>

        </div>
    )
}

export default SmurfData;