import React from "react";

export const SmurfDetails = (props) => {
    return (
    <>
        <h2>{props.smurf.name}</h2>
        <p>Age: {props.smurf.age}</p>
        <p>Height: {props.smurf.height}</p>
    </>
    );
};

export default SmurfDetails;