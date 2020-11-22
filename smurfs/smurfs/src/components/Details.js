import React from "react";

export const Details = (props) => {
  return (
    <>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </>
  );
};

export default Details;
