import React from "react";

export default function SmurfCard(props) {
    return(
        <div className="smurf-card">
            <h1>{props.object.name}</h1>
            <p>Age: {props.object.age}</p>
        </div>
    )
}