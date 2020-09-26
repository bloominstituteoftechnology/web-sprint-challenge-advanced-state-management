import React from "react";

export const SmurfCard = (props) => {
  console.log("props from SmurfCard", props);
  return (
    <div className="Smurf">
      <p className="Name">Name: {props.smurf.name}</p>
      <p className="Age">Age: {props.smurf.age}</p>
      <p className="Height">Height: {props.smurf.height}</p>
    </div>
  );
};
