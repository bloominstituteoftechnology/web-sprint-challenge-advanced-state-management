import React from "react";
import Smurf from "./Smurf";

const SmurfList = (props) => {

  return (
    <div className="smurf-list">
      {props.state?.smurfs?.map(smurf => {
        return <Smurf dispatch={props.dispatch} smurf={smurf}/>
      })}
    </div>
  );
};

export default SmurfList;