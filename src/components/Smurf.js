import React, { useContext } from "react";

import SmurfContext from "./../contexts/SmurfContext";

const Smurfs = () => {
  const smurf = useContext(SmurfContext);

  return (
    <div data-testid="smurf" className="card">
      <div className="card-body">
        <h3 className="card-title">{smurf.name}</h3>
        <hr />
        <p className="card-text">
          <b>Position:</b> {smurf.position}
        </p>
        <p className="card-text">
          <b>Nickname:</b> {smurf.nickname}
        </p>
        <p className="card-text">
          <b>Description:</b> {smurf.description}
        </p>
      </div>
    </div>
  );
};

export default Smurfs;
