import React from "react";

const Smurf = props => {
    return(
        <div className="smurf">
            <h4>{props.smurf.name}</h4>
            <p>{props.smurf.age} years old.</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;