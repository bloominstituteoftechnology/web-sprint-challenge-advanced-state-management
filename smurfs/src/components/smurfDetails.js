import React from "react";

export const SmurfDetails = (props) => {
    return (
    <>
        <h1>{props.smurf.name}</h1>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
    </>
    );
};

export default SmurfDetails;