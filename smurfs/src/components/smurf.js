import React from "react";

const Smurf = props => {
  const { name, age, height } = props.smurf;
  return (
    <>
      <h3>{name}</h3>
      <ul>
        <li>Age: {age}</li>
        <li>Height: {height}</li>
      </ul>
    </>
  );
};

export default Smurf;