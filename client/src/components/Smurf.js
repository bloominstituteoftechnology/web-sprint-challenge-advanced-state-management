import React from "react";
import { connect } from "react-redux";
function Smurf(props) {
  return (
    <div data-testid="smurf" className="card">
      <h2>{props.item.name}</h2>
      <h3>{props.item.nickname}</h3>
      <p>{props.item.position}</p>
      <p>{props.item.description}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
  };
};
export default connect(mapStateToProps)(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
