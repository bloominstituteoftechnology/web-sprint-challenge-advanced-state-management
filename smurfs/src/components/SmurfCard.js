import React from "react";

const SmurfCard = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
    </div>
  );
};

export default SmurfCard;