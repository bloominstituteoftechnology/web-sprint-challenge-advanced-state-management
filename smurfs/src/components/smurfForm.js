import React from "react";
import { connect } from "react-redux";

import {
  onNameInputChange,
  onAgeInputChange,
  onHeightInputChange,
  postSmurf,
} from "../actions/smurfActions";

const SmurfForm = ({
  values,
  disabled,
  onNameInputChange,
  onAgeInputChange,
  onHeightInputChange,
  postSmurf,
}) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    postSmurf(values);
  };
  return (
    <form className="form">
      <h2>Welcome to the SmurfVillage!</h2>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={onNameInputChange}
        placeholder="Your Smurf Name Here..."
      />
      <input
        type="text"
        name="age"
        value={values.age}
        onChange={onAgeInputChange}
        placeholder="Smurf Age Here..."
      />
      <input
        type="text"
        name="height"
        value={values.height}
        onChange={onHeightInputChange}
        placeholder="Smurf Height Here..."
      />
      <button onClick={onSubmit} disabled={disabled}>Submit Your Smurf!</button>
    </form>
  );
  
};
const mapStateToProps = state => {
    console.log(state.formValues)

    return {
        values: state.formValues,
        disabled: state.disabled
    };
};
export default connect(mapStateToProps, { onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf })(SmurfForm);