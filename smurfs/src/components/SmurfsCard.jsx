import React from 'react'

const SmurfsCard = (props) => {
  return (
      <div className="container">
    <div className= "card">
      <h2>{props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
    </div>
  );
};
export default SmurfsCard